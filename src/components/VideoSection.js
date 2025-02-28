// VideoSection.jsx
import React from 'react';

const VideoSection = () => {
  return (
    <div className="w-full py-16">
      <div className="max-w-7xl mx-[95px]">
        <div className="relative w-full border-2 border-blue-500 overflow-hidden">
          <div className="aspect-video w-full">
            {/* Video with poster image */}
            <video 
              className="w-[1260px] h-[730px]"
              controls
              src="\images\video.mp4"
              preload="none"
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Title overlay that stays visible */}
            <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black/70 to-transparent p-4 pointer-events-none">
              <h3 className="text-white text-lg md:text-xl font-semibold">
                Streamlined Construction Estimating: Our Proven Process Explained
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;