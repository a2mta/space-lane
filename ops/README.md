# Automatic deployment

Each push to `main` triggers a VPS build of the latest `main`. Only one app
installation is retained. A temporary checkout is built while the current app
continues running; after a successful build the service stops, the app is
replaced, and the service starts. There is no rollback. Builds share the VPS's
CPU and memory with the running app. Domains and Nginx are configured separately.

## One-time VPS setup

Requires the `deploy` user, `/usr/bin/node`, npm, Git, curl, sudo and systemd.
The deploy user's GitHub SSH key must have read access to the repository.
Verify GitHub's host key before accepting it on the first connection.

Run as root:

```bash
install -d -o deploy -g deploy /srv/space-lane
sudo -u deploy -H git clone --depth 1 --branch main \
  git@github.com:a2mta/space-lane.git /home/deploy/space-lane-setup
install -m 755 /home/deploy/space-lane-setup/ops/deploy.sh /usr/local/bin/deploy-space-lane
install -m 644 /home/deploy/space-lane-setup/ops/space-lane.service /etc/systemd/system/space-lane.service
printf '%s\n' 'deploy ALL=(root) NOPASSWD: /usr/bin/systemctl stop space-lane, /usr/bin/systemctl start space-lane' > /etc/sudoers.d/space-lane
chmod 440 /etc/sudoers.d/space-lane
visudo -cf /etc/sudoers.d/space-lane
systemctl daemon-reload
systemctl enable space-lane
```

The setup checkout is only for installation; remove it after copying these files.
If an earlier service uses `current` and `releases`, this service replaces that
configuration. Remove those old directories after verifying the new deployment;
this script never uses them.

## Allow GitHub Actions to connect

Generate a separate key on your own computer:

```bash
ssh-keygen -t ed25519 -C space-lane-actions -f ./space-lane-actions -N ''
```

Append the `.pub` file's contents to `/home/deploy/.ssh/authorized_keys` on the
VPS. Create the directory with mode 700 and the file with mode 600, both owned
by `deploy`. Prefix this key's authorized_keys entry with
`restrict,command="/usr/local/bin/deploy-space-lane"` to restrict it to deployment.
Never commit either generated key file to the repository.

In GitHub → repository Settings → Secrets and variables → Actions, add:

| Secret | Value |
| --- | --- |
| `VPS_HOST` | VPS IP address or SSH hostname; uses port 22 |
| `VPS_SSH_KEY` | Contents of the private `space-lane-actions` key |
| `VPS_KNOWN_HOSTS` | Verified known_hosts entry for that exact host |

Collect a candidate host entry on your computer using `ssh-keyscan -H YOUR_VPS_IP`.
Verify its fingerprint against the VPS's host key, available through your trusted
SSH session with `ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub`. Do not trust
unverified scan output.

## Deploy and inspect

Push these files to `main`, finish setup, then run Actions → Deploy main → Run
workflow. Subsequent pushes deploy automatically. A queued run deploys whatever
is latest on `main` when it clones, rather than necessarily its triggering commit.
The log prints the deployed commit. Both workflow triggers must run from `main`.

Manual deployment as root:

```bash
sudo -u deploy -H /usr/local/bin/deploy-space-lane
journalctl -u space-lane -n 100 --no-pager
curl -I http://127.0.0.1:3000/
```

The service binds to localhost port 3000 for your Nginx upstream. A build failure
leaves the existing app installed. A failure after replacement requires a fix
and another deployment. The HTTP check verifies startup, not all site behavior.
Keep persistent uploads and server-only secrets outside `/srv/space-lane/app`:
that directory is completely replaced on every successful build.

Changes to `ops/deploy.sh` or the service require reinstalling those files using
the root installation commands; normal app updates are automatic.
