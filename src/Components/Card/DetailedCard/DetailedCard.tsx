// DetailedCard.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  questions: string[];
  onInputChange: (question: string, answer: string) => void;
  answers: { [key: string]: string };
}

const DetailedCard: React.FC<Props> = ({
  questions,
  onInputChange,
  answers,
}) => {
  const [textInput, setTextInput] = useState(answers[questions[0]] || ""); // Initialize with the answer if already provided
  const [questionIndex, setQuestionIndex] = useState(0); // State to store the current question index
  const [progress, setProgress] = useState(100 / questions.length); // State to store progress through the quiz
  const [isTextInputEmpty, setIsTextInputEmpty] = useState(
    textInput.trim() === ""
  ); // State to track whether the text input is empty

  const handleSubmit = () => {
    // Here you can submit the text input along with the current answers
    onInputChange(questions[questionIndex], textInput);
    const currentAnswers = {
      ...answers,
      [questions[questionIndex]]: textInput,
    };
    console.log("Current answers:", currentAnswers);

    // After submitting, you can navigate to the results page
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setTextInput(inputValue);
    setIsTextInputEmpty(inputValue.trim() === ""); // Update the state based on the content of the input
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prevIndex) => prevIndex - 1);
      setTextInput(answers[questions[questionIndex - 1]] || "");
      setProgress((prevProgress) => prevProgress - 100 / questions.length);
      onInputChange(questions[questionIndex], textInput);
    }
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      setTextInput(answers[questions[questionIndex + 1]] || "");
      setProgress((prevProgress) => prevProgress + 100 / questions.length);
      onInputChange(questions[questionIndex], textInput);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="pb-3">
        <div className="w-[50rem] rounded-full bg-gray-200 p-2">
          <div
            className="bg-gradient-to-r from-cyan-300 to-blue-400 h-full rounded-full w-[20%] text-white font-medium p-2 text-xs text-center transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: "#ADD8E6" }}
          >
            {" "}
          </div>
        </div>
      </div>
      <div
        className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-3/4 xl:w-2/3 ml-auto mr-auto pt-10 border border-gray-300"
        style={{
          maxWidth: "800px",
          minWidth: "800px",
          maxHeight: "500px",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="mb-6 pb-16">{questions[questionIndex]}</div>
        <div>
          <textarea
            className="w-full h-24 border rounded-md p-2"
            placeholder="Enter your text here"
            value={textInput}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 hover:opacity-70 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 hover:opacity-70 text-white font-bold py-2 px-4 rounded ml-4 ${
              isTextInputEmpty ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNext}
            disabled={isTextInputEmpty}
          >
            Next
          </button>
        </div>
      </div>
      <div>
        <Link to="/results-page">
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded mt-8"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailedCard;
