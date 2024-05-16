import React, { useState } from "react";
import DetailedCard from "../../Components/Card/DetailedCard/DetailedCard";
import VideoCard from "../../Components/VideoCard/VideoCard";
import background from "../../Components/Hero/background.png";
import "./DetailedQuestionsPage.css";

interface Props {}

const DetailedQuestionsPage = (props: Props) => {
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

  const questions = [
    "1. What activities or hobbies do you find yourself consistently drawn to, even in your free time? How do these activities reflect your personality traits and preferences?",
    "2. Reflecting on past experiences, what roles or tasks have brought you the most satisfaction and fulfillment? What about these experiences resonated with you on a personal level?",
    "3. In group settings or social gatherings, what role do you naturally gravitate towards? Are you the organizer, the problem-solver, the listener, or the one who takes charge? How does this reflect your leadership and interpersonal skills?",
    "4. When faced with challenges or obstacles, what is your typical approach to problem-solving? Do you prefer to tackle issues head-on, explore different perspectives, or seek advice from others? How does this approach align with your personality strengths?",
    "5. Consider your communication style: are you more comfortable expressing yourself verbally, through writing, or through visual means like art or design? How does your preferred mode of communication reflect your personality and creative abilities? ",
    "6. Reflect on moments when you've felt particularly motivated and engaged. What common themes or values were present in these experiences? How do these values inform your career aspirations and goals?",
    "7. Imagine yourself in a work environment: do you thrive in structured, predictable settings, or do you prefer flexibility and autonomy? How does your preferred work environment align with your personality traits and preferences for career paths?",
  ];

  // const [answers, setAnswers] = useState<{ [key: string]: string }>(() => {
  //   const initialAnswers: { [key: string]: string } = {};
  //   questions.forEach((question) => {
  //     initialAnswers[question] = ""; // Initialize each answer as an empty string
  //   });
  //   return initialAnswers;
  // });
  // const [answers, setAnswers] = useState<string[]>([]);

  // const handleInputChange = (question: string, answer: string) => {
  //   // Update the answers state

  //   setAnswers((prevAnswers) => ({
  //     ...prevAnswers,
  //     [question]: answer,
  //   }));
  // };

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
        <div className="flex justify-center pt-15 ">
          <h1>Detailed Questions Page</h1>
        </div>
        <div>
          <div className="flex justify-center pt-5">
            <DetailedCard
              questions={questions}
              // onInputChange={handleInputChange}
              // answers={answers}
              // onSubmit={(userAnswers: string) => {
              //   // Handle the submission logic here
              //   console.log("User answers:", userAnswers);
              // }}
            />
          </div>
          <div
            className="float top-1/2 transform -translate-y-1/2 pl-10 right-10 w-1/5 pb-28"
            onWheel={handleVideoScroll}
          >
            <VideoCard videoSrc={videos[currentVideoIndex]} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailedQuestionsPage;
