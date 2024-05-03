import React, { useState } from "react";

interface Props {
  questions: string[];
}

const BasicCard: React.FC<Props> = ({ questions }) => {
  const [selectedOption, setSelectedOption] = useState(""); // State to store the selected option
  const [answers, setAnswers] = useState<string[]>([]); // State to store the answers
  const [questionIndex, setQuestionIndex] = useState(0); // State to store the current question index

  const handleSubmit = () => {
    // Here you can submit the selected option, for now, let's just log it
    console.log("Selected option:", selectedOption);
    const updatedAnswers = [...answers]; // Create a copy of the answers array
    updatedAnswers[questionIndex] = selectedOption; // Set the answer at questionIndex to be the selected option
    setAnswers(updatedAnswers); // Update the answers state with the updated array
    setSelectedOption(""); // Reset the selected option after submitting
    console.log({ updatedAnswers });
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value); // Update the selected option state when the radio button value changes
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
    console.log("Previous");
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
    console.log("Next");
  };

  return (
    <div className="flex flex-col items-center">
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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BasicCard;
