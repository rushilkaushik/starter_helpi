import React, { useState } from "react";
import DetailedCard from "../../Components/Card/DetailedCard/DetailedCard";
import VideoCard from "../../Components/VideoCard/VideoCard";
import "./DetailedQuestionsPage.css";

interface Props {}

const DetailedQuestionsPage = (props: Props) => {
  const Minecraft = "MinecraftVideo.mp4";

  const questions = [
    "1. What activities or hobbies do you find yourself consistently drawn to, even in your free time? How do these activities reflect your personality traits and preferences?",
    "2. Reflecting on past experiences, what roles or tasks have brought you the most satisfaction and fulfillment? What about these experiences resonated with you on a personal level?",
    "3. In group settings or social gatherings, what role do you naturally gravitate towards? Are you the organizer, the problem-solver, the listener, or the one who takes charge? How does this reflect your leadership and interpersonal skills?",
    "4. When faced with challenges or obstacles, what is your typical approach to problem-solving? Do you prefer to tackle issues head-on, explore different perspectives, or seek advice from others? How does this approach align with your personality strengths?",
    "5. Consider your communication style: are you more comfortable expressing yourself verbally, through writing, or through visual means like art or design? How does your preferred mode of communication reflect your personality and creative abilities? ",
    "6. Reflect on moments when you've felt particularly motivated and engaged. What common themes or values were present in these experiences? How do these values inform your career aspirations and goals?",
    "7. Imagine yourself in a work environment: do you thrive in structured, predictable settings, or do you prefer flexibility and autonomy? How does your preferred work environment align with your personality traits and preferences for career paths?",
  ];

  const [answers, setAnswers] = useState<{ [key: string]: string }>(() => {
    const initialAnswers: { [key: string]: string } = {};
    questions.forEach((question) => {
      initialAnswers[question] = ""; // Initialize each answer as an empty string
    });
    return initialAnswers;
  });

  const handleInputChange = (question: string, answer: string) => {
    // Update the answers state
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  return (
    <>
      <div className="flex justify-center pt-15 ">
        <h1>Detailed Questions Page</h1>
      </div>
      <div>
        <div className="flex justify-center pt-5">
          <DetailedCard
            questions={questions}
            onInputChange={handleInputChange}
            answers={answers}
          />
        </div>
        <div className="float top-1/2 transform -translate-y-1/2 pl-10 right-10 w-1/5">
          <VideoCard videoSrc={Minecraft} /> {/* Use the video source link */}
        </div>
      </div>
    </>
  );
};

export default DetailedQuestionsPage;
