import React from "react";
import Card from "../../Components/Card/Card";
import VideoCard from "../../Components/VideoCard/VideoCard";
import John from "../../assets/John.png";
import "./BasicQuestionPage.css";
const BasicQuestionsPage = () => {
  const subwaySurfersVideoSrc = "subwaysurfers.mp4"; // Keep the video source link

  return (
    <>
      <div className="w-screen h-screen p-0 relative">
        <div className="flex justify-center pt-20">
          <h1>Basic Questions Page</h1>
        </div>
        <div className="relative flex justify-center pt-5">
          <Card
            questions={[
              "Question 1?",
              "Question 2?",
              "Question 3?",
              "Question 4?",
              "Question 5?",

              "Question 6?",
              "Question 7?",
            ]}
          />
        </div>

        <div className="float top-1/2 transform -translate-y-1/2 pl-10 right-10">
          <VideoCard videoSrc={subwaySurfersVideoSrc} />
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={John} alt="John" className="john-image" />
      </div>
    </>
  );
};

export default BasicQuestionsPage;
