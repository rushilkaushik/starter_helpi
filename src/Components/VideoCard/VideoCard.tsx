import React, { useState } from "react";
import ReactPlayer from "react-player";

interface Props {
  videoSrc: string;
}

const VideoCard: React.FC<Props> = ({ videoSrc }) => {
  const [showVideo, setShowVideo] = useState(true);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div>
      {showVideo && (
        <ReactPlayer url={videoSrc} controls width="15%" height="15%" />
      )}
      <div className="container">
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
