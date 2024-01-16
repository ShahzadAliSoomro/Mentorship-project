"use client";
import React, { useState, useRef } from "react";

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoLink =
    "https://www.youtube.com/watch?v=66XwG1CLHuU&pp=ygUUaW50cm9kdWN0aW9uIHByb2R1Y3Q%3D";
  const videoId = new URL(videoLink).searchParams.get("v");
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      } else {
        video.contentWindow?.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl w-[84px] h-[84px] text-gray-700">
        {/* Your icon or content for the first div */}
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFD962] opacity-[0.5] p-2 w-[84px] h-[84px] rounded-2xl text-transparent">
        {/* You can add an icon or any content inside the button */}
      </div>

      <span className="w-[64.615px] h-[64.615px] bg-[#FFD03F] absolute top-1/2 left-1/2 rounded-2xl transform -translate-x-1/2 -translate-y-1/2">
        <button onClick={handleTogglePlay}>
          <svg
            onClick={handleTogglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M4.38452 4.57752V21.4256C4.38452 22.7103 5.79937 23.4909 6.88896 22.7916L20.1267 14.3676C21.135 13.7334 21.135 12.2697 20.1267 11.6192L6.88896 3.21146C5.79937 2.51217 4.38452 3.29277 4.38452 4.57752Z"
              fill="#141317"
            />
          </svg>
        </button>
      </span>

      {/* Video Component */}
      <div className="w-full rounded-lg">
        <iframe
          ref={videoRef}
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
          className="rounded-2xl"
        ></iframe>
      </div>
      {/* <div className="hidden lg:block absolute top-[102%] left-[87%] transform -translate-x-1/2 -translate-y-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
  <circle cx="32.5" cy="32.5" r="31" stroke="#FFD03F" stroke-width="3"/>
</svg>
        </div> */}
    </div>
  );
}
