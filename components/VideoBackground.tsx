"use client";

import { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  src: string | string[];
  poster: string;
  className?: string;
}

export function VideoBackground({ src, poster, className }: VideoBackgroundProps) {
  const sources = Array.isArray(src) ? src : [src];
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRefs.current[0];
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || sources.length < 2) return;

    const rotation = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % sources.length);
    }, 8500);

    return () => window.clearInterval(rotation);
  }, [isVisible, sources.length]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (isVisible && index === activeIndex) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });
  }, [activeIndex, isVisible]);

  return (
    <div className="relative h-full w-full [perspective:1400px]" aria-hidden="true">
      {sources.map((source, index) => {
        const distance = (index - activeIndex + sources.length) % sources.length;
        const isActive = distance === 0;
        const isNext = distance === 1;

        return (
          <video
            key={source}
            ref={(video) => {
              videoRefs.current[index] = video;
            }}
            className={`absolute inset-0 ${className ?? ""}`}
            style={{
              opacity: isActive ? 1 : isNext ? 0.22 : 0.08,
              transform: isActive
                ? "translate3d(0, 0, 0) scale(1) rotateY(0deg)"
                : isNext
                  ? "translate3d(7%, 0, -90px) scale(.96) rotateY(-7deg)"
                  : "translate3d(-7%, 0, -140px) scale(.92) rotateY(7deg)",
              transition: "opacity 1.2s ease, transform 1.2s ease",
              zIndex: isActive ? 2 : 1,
            }}
            autoPlay={index === 0}
            muted
            loop
            playsInline
            preload={index === 0 ? "metadata" : "none"}
            poster={poster}
          >
            <source src={source} type="video/mp4" />
          </video>
        );
      })}
    </div>
  );
}
