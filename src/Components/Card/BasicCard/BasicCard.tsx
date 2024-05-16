import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import { Link } from "react-router-dom";
import { useGlobalState } from "../../../GlobalStateContext";

export interface Props {
  questions: string[];
}
const BasicCard: React.FC<Props> = ({ questions }) => {
  const { setAnswers, setQuestions } = useGlobalState();
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected option
  const [answers, setLocalAnswers] = useState<string[]>([]); // State to store the answers
  const [questionIndex, setQuestionIndex] = useState(0); // State to store the current question index
  const [progress, setProgress] = useState(100/(questions.length)); // State to store progress through the quiz
  const [openModal, setOpenModal] = useState(false); // State for popup when submitting

  useEffect(() => {
    setSelectedOption(answers[questionIndex] || "");
  }, [questionIndex, answers]);

  const handleMessage = () => {
    // Check if all questions have been answered
    const answeredQuestions = answers.filter((answer: string ): boolean => answer !== "");

    // Define the confirmation message based on whether all questions are answered
    let confirmMessage = "Confirm answers?"
    if (answeredQuestions.length === 0) {
      confirmMessage = `You haven't answered any questions yet. You must at least answer one question before submitting.`;
    } else if (answeredQuestions.length < questions.length) {
      confirmMessage = `Are you sure you want to submit? You have answered ${answeredQuestions.length} out of ${questions.length} questions.`;
    }
    return confirmMessage;
  }

  const handleSubmit = () => {
    // Here you can submit the selected option, for now, let's just log it
    setOpenModal(false);
    setAnswers(answers);
    setQuestions([
      "1. I like working in a collaborative and social environment.",
      "2. I enjoy using my hands in my work tasks.",
      "3. I prefer spending my day indoors rather than outdoors.",
      "4. I prefer working directly with people rather than indirectly.",
      "5. I prefer following instructions rather than coming up with my own ideas.",
      "6. I value having a job that allows me to express my creativity.",
      "7. Work-life balance is important to me.",
    ]);
    console.log("Selected option:", selectedOption);
    const updatedAnswers = [...answers]; // Create a copy of the answers array
    updatedAnswers[questionIndex] = selectedOption; // Set the answer at questionIndex to be the selected option
    setLocalAnswers(updatedAnswers); // Update the answers state with the updated array
    setSelectedOption(""); // Reset the selected option after submitting
    console.log({ updatedAnswers });
    
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;
    setSelectedOption(option); // Update the selected option state when the radio button value changes
    setLocalAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = option;
      return updatedAnswers;
    });
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1); //If you are past question 1, then you go back to the previous question.
    }
    if (progress > 100/(questions.length-1)){
      setProgress(progress - (100/(questions.length))); //If progress is past question 1, set progress back by 100/number of questions.
    }
    console.log("Previous");
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1) { 
      setQuestionIndex(questionIndex + 1); //If you are before the last question, then you go to the next question.
    }
    if (progress < 99){
      setProgress(progress + (100/(questions.length))); //If progress is before the last question, set progress forward by 100/number of questions.
    }
    console.log("Next");
  };

  return (
    <div className="flex flex-col items-center">
      <div className = "pb-3">
      <div className="w-[25rem] rounded-full bg-gray-200 p-1">
        <div className="bg-gradient-to-r from-cyan-300 to-blue-400 h-full rounded-full w-[20%] text-white font-medium p-1 text-xs text-center transition-all duration-500"
                style={{ width: `${progress}%`, backgroundColor: "#ADD8E6" }}>
                {" "}
        </div>
      </div>
      </div>
     
      {/* Container for both divs */}
      <div
        className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-3/4 xl:w-2/3 ml-50 mr-50 pt-10 border border-gray-300"
        style={{
          maxWidth: "400px",
          minWidth: "400px",
          maxHeight: "500px",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "center", // Center align the text
        }}
      >
        {/* Adjusted padding and width */}
        {/* Content */}
        <div className="mb-6 pb-16">{questions[questionIndex]}</div>
        {/* Multiple Choice Radio Buttons */}
        <div>
          <label>
            <input
              type="radio"
              value="Strongly Agree"
              checked={selectedOption === "Strongly Agree"}
              onChange={handleOptionChange}
            />
            Strongly Agree
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Agree"
              checked={selectedOption === "Agree"}
              onChange={handleOptionChange}
            />
            Agree
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Neutral"
              checked={selectedOption === "Neutral"}
              onChange={handleOptionChange}
            />
            Neutral
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Disagree"
              checked={selectedOption === "Disagree"}
              onChange={handleOptionChange}
            />
            Disagree
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="Strongly Disagree"
              checked={selectedOption === "Strongly Disagree"}
              onChange={handleOptionChange}
            />
            Strongly Disagree
          </label>
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6">
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 hover:opacity-70 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 hover:opacity-70 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
      {/* Submit Button */}
      <div>
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded mt-8"
          onClick={() => setOpenModal(true)}
        >
          Submit
        </button>
        <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  {handleMessage()}
                </h3>
                <div className="flex justify-center gap-4">
                  <Link to="/results-page" state={answers}>
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500" onClick={handleSubmit} disabled={handleMessage() === "You haven't answered any questions yet. You must at least answer one question before submitting."}>
                      {"Submit"}
                    </Button>
                  </Link>
                  <Button color="gray" onClick={() => setOpenModal(false)}>
                    Continue
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
      </div>
    </div>
  );
};

export default BasicCard;
