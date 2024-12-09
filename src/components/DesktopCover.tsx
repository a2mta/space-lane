'use client'
import React, { useEffect, useRef, useState } from 'react';
import animationData from '../app/animation.json';
import Lottie, { AnimationItem } from 'lottie-web';
import classNames from 'classnames';

const DesktopCover = () => {
  const [animationVisible, toggleVisibility] = useState(true);
  const [containerVisible, toggleContainer] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const animation = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const hasShownAnimation = sessionStorage.getItem('hasShownAnimation');
    if (isMobile || hasShownAnimation) {
      toggleVisibility(false);
      toggleContainer(false);
      if (typeof document !== 'undefined') {
        document.documentElement.style.overflow = 'auto';
      }
      return;
    }
    if (typeof document !== 'undefined') {
      document.documentElement.style.overflow = 'hidden';
    }
    if (containerRef.current) {
      animation.current = Lottie.loadAnimation({
        container: containerRef.current,
        animationData: animationData,
        loop: false,
        autoplay: false,
        name: 'screen',
      });
      animation.current.play();
    }

    setTimeout(() => {
      if (animationVisible) {
        handleVisibility();
      }
    }, 10000);
  }, [animationVisible]);

  const handleVisibility = () => {
    toggleVisibility(false);
    if (animation.current) {
      animation.current.pause();
    }
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        document.documentElement.style.overflow = 'auto';
      }
      toggleContainer(false);
      sessionStorage.setItem('hasShownAnimation', 'true');
    }, 1000);
  };

  return (
    containerVisible && (
      <div
        onClick={handleVisibility}
        className={classNames(
          'z-[999999] cursor-pointer fixed w-screen bg-white h-screen top-0 left-0 transition-opacity duration-1000 md:block hidden',
          { 'opacity-0': !animationVisible }
        )}
        ref={containerRef}
      />
    )
  );
};

export default DesktopCover;
