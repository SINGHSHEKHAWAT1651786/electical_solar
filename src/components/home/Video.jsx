import React from "react";

const Video = ({ src = "/video.mp4" }) => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={src}
      />
    </div>
  );
};

export default Video;