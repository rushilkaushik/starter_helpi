import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./VideoCard.css";
interface Props {
  videoSrc: string;
}

const VideoCard: React.FC<Props> = ({ videoSrc }) => {
  const [showVideo, setShowVideo] = useState(true);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="pt-5">
      {showVideo && (
        <ReactPlayer
          url={videoSrc}
          controls
          width="15%"
          height="15%"
          loop={true}
        />
      )}
      <div className="container-checked pt-2">
        <h1 className="pl-3 pr-4">Entertainment Mode</h1>
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
