#!/usr/bin/env bash
set -Eeuo pipefail

base=/srv/space-lane
exec 9>"$base/deploy.lock"
flock -n 9 || { echo 'Another deployment is running.'; exit 1; }

staging=$(mktemp -d "$base/build.XXXXXX")
trap 'rm -rf -- "$staging"' EXIT

git clone --depth 1 --branch main \
  git@github.com:a2mta/space-lane.git "$staging"
cd "$staging"
npm ci
NEXT_TELEMETRY_DISABLED=1 npm run build
commit=$(git rev-parse HEAD)

sudo /usr/bin/systemctl stop space-lane
cd "$base"
rm -rf -- "$base/app"
mv -- "$staging" "$base/app"
sudo /usr/bin/systemctl start space-lane

for attempt in {1..20}; do
  if systemctl is-active --quiet space-lane &&
    curl --fail --silent --output /dev/null --max-time 3 http://127.0.0.1:3000/; then
    echo "Deployed $commit"
    exit 0
  fi
  sleep 2
done

echo 'Startup check failed. No previous release is retained.' >&2
exit 1
