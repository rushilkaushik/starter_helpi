import React from "react";
import VideoCard from "../../Components/VideoCard/VideoCard";
import John from "../../assets/John.png";
import "./BasicQuestionPage.css";
import BasicCard from "../../Components/Card/BasicCard/BasicCard";
const BasicQuestionsPage = () => {
  const subwaySurfersVideoSrc = "subwaysurfers.mp4"; // Keep the video source link

  return (
    <>
      <div className="w-screen h-screen p-0 relative">
        <div className="flex justify-center pt-15 ">
          <h1>Basic Questions Page</h1>
        </div>
        <div className="relative flex justify-center pt-5">
          <BasicCard
            questions={[
              "1. I like working in a collaborative and social environment.",
              "2. I enjoy using my hands in my work tasks.",
              "3. I prefer spending my day indoors rather than outdoors.",
              "4. I prefer working directly with people rather than indirectly.",
              "5. I prefer following instructions rather than coming up with my own ideas.",
              "6. I value having a job that allows me to express my creativity.",
              "7. Work-life balance is important to me.",
            ]}
          />
        </div>
        

        <div className="float top-1/2 transform -translate-y-1/2 pl-10 right-10 w-1/5">
          <VideoCard videoSrc={subwaySurfersVideoSrc} />{" "}
          {/* Use the video source link */}
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={John} alt="John" className="john-image" />
      </div>
    </>
  );
};

export default BasicQuestionsPage;
