import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./VideoCard.css";

interface Props {
  videoSrc: string;
}

const VideoCard: React.FC<Props> = ({ videoSrc }) => {
  const [showVideo, setShowVideo] = useState(false); // Set initial state to false

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="pt-5">
      {showVideo && (
        <ReactPlayer
          url={videoSrc}
          playing={true}
          width="81%"
          height="81%"
          loop={true}
        />
      )}
      <div className="container-checked pt-2">
        <h1 className="pl-3 pr-4">Entertainment Mode</h1>

        {/* Code for toggle button */}
        <input
          type="checkbox"
          checked={showVideo}
          onChange={toggleVideo}
          id="check"
        />
        <label htmlFor="check" className="button"></label>
      </div>
    </div>
  );
};

export default VideoCard;
