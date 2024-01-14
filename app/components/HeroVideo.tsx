import React from 'react';

export default function HeroVideo() {
  const videoLink = 'https://www.youtube.com/watch?v=JYD4UZiGKgY';

  return (
    <div className="w-full">
      <div className="mx-auto container">
        {/* Video Component */}
        <div className="w-full rounded-lg">
          <iframe
            width="100%"
            height="350"
            src={`https://www.youtube.com/embed/${videoLink.split('/').pop()}`}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
