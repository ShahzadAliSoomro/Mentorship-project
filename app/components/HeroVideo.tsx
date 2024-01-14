import React from 'react';

export default function HeroVideo() {
  const videoLink = 'https://www.youtube.com/watch?v=JYD4UZiGKgY';
  const videoId = new URL(videoLink).searchParams.get('v');

  return (
    <div className="w-full">
      <div className="mx-auto container">
        {/* Video Component */}
        <div className="w-full rounded-lg">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
            className='rounded-2xl'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
