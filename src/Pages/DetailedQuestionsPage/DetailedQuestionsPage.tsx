import React from "react";
import Card from "../../Components/Card/Card";
import VideoCard from "../../Components/VideoCard/VideoCard";
interface Props {}

const DetailedQuestionsPage = (props: Props) => {
  const Minecraft = "MinecraftVideo.mp4";
  return (
    <>
      <div className="flex justify-center pt-20 ">
        <h1>Detailed Questions Page</h1>
      </div>
      <div>
        <div className="flex justify-center pt-5">
          <Card questions={["dq1?", "dq2?", "dq3?"]} />
        </div>
        <div className="float top-1/2 transform -translate-y-1/2 pl-10 right-10">
          <VideoCard videoSrc={Minecraft} /> {/* Use the video source link */}
        </div>
      </div>
    </>
  );
};

export default DetailedQuestionsPage;
