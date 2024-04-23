import React from "react";
import Card from "../../Components/Card/Card";
import VideoCard from "../../Components/VideoCard/VideoCard";

const BasicQuestionsPage = () => {
  const subwaySurfersVideoSrc = "subwaysurfers.mp4"; // Keep the video source link

  return (
    <>
      <div className="flex justify-center pt-20">
        <h1>Basic Questions Page</h1>
      </div>
      <div>
        <div className="flex justify-center pt-5">
          <Card />
        </div>
        <div>
          <VideoCard videoSrc={subwaySurfersVideoSrc} />{" "}
          {/* Use the video source link */}
        </div>
      </div>
    </>
  );
};

export default BasicQuestionsPage;
