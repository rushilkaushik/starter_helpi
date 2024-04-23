import React from "react";
import Card from "../../Components/Card/Card";
import VideoCard from "../../Components/VideoCard/VideoCard";
interface Props {}

const DetailedQuestionsPage = (props: Props) => {
  const Minecraft = "MinecraftVideo.mp4";
  return (
    <>
      <div className="flex justify-center pt-20">
        <h1>Detailed Questions Page</h1>
      </div>
      <div>
        <div className="flex justify-center pt-5">
          <Card />
        </div>
        <div>
          <VideoCard videoSrc={Minecraft} /> {/* Use the video source link */}
        </div>
      </div>
    </>
  );
};

export default DetailedQuestionsPage;
