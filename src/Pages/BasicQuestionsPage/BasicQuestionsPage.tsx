import React from "react";
import Card from "../../Components/Card/Card";
import VideoCard from "../../Components/VideoCard/VideoCard";

const BasicQuestionsPage = () => {
  const subwaySurfersVideoSrc = "subwaysurfers.mp4"; // Keep the video source link

  return (
    <>
      <div className="w-screen h-screen p-0 relative">
        <div className="flex justify-center pt-20">
          <h1>Basic Questions Page</h1>
        </div>
        <div className="relative flex justify-center pt-5">
          <Card />
        </div>
        <div className="float top-1/2 transform -translate-y-1/2 pl-10 right-10">
          <VideoCard videoSrc={subwaySurfersVideoSrc} />
        </div>
      </div>
    </>
  );
};

export default BasicQuestionsPage;
