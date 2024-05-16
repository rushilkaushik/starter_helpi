import React, { useState } from "react";
import VideoCard from "../../Components/VideoCard/VideoCard";
import John from "../../assets/clearJohn.png";
import "./BasicQuestionPage.css";
import BasicCard from "../../Components/Card/BasicCard/BasicCard";
import background from "../../Components/Hero/background.png";

const BasicQuestionsPage = () => {
  const videos = [
    "MinecraftVideo.mp4",
    "subwaysurfers.mp4",
    "kingBaldwin.mp4",
    "sandvideo.mp4",
    "samOne.mp4",
    "samTwo.mp4",
    "samThree.mp4",
    "samFour.mp4",
    "sigma.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const delta = event.deltaY;
    const newIndex = currentVideoIndex + (delta > 0 ? 1 : -1);
    if (newIndex >= 0 && newIndex < videos.length) {
      setCurrentVideoIndex(newIndex);
    }
  };

  return (
    <>
      <section
        id="Hero"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center", // Adjust the position here
          height: "100vh",
        }}
      >
        <div className="w-screen h-screen p-0 relative">
          <div className="flex justify-center pt-15 ">
            <h1>Basic Questions Page</h1>
          </div>
          <div className="relative flex justify-center pt-5">
            <BasicCard
              questions={[
                "1. I like working in a collaborative and social environment.",
                "2. I enjoy doing hands-on exercises/tasks.",
                "3. I prefer to spend my day indoors rather than outdoors.",
                "4. I believe I am extroverted as opposed to introverted.",
                "5. I am motivated by financial benefits or high wages.",
                "6. I value having a job that allows me to express my creativity.",
                "7. Work-life balance is important to me.",
                "8. Routine tasks are comforting to me as opposed to tedious.",
                "9. I thrive in fast-paced, high-pressure environments.",
                "10. In school, I preferred subjects like math, science, and technology (STEM).",
                "11. In school, I preferred subjects like art, literature, and history.",
                "12. When it comes to problem-solving, I feel more comfortable brainstorming creative solutions rather than analyzing data/statistics.",
              ]}
            />
          </div>

          <div
            className="float top-1/2 transform -translate-y-1/2 pl-10 right-10 w-1/5 pb-28"
            onWheel={handleVideoScroll}
          >
            <VideoCard videoSrc={videos[currentVideoIndex]} />
          </div>
          {/* Use the video source link */}
        </div>
        <div className="absolute bottom-0 right-0">
          <img src={John} alt="John" className="john-image" />
        </div>
      </section>
    </>
  );
};

export default BasicQuestionsPage;
