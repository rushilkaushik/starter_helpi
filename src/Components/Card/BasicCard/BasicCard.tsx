import React, { useState } from "react";

interface Props {
  questions: string[];
}

const BasicCard: React.FC<Props> = (Props) => {
  const { questions } = Props;
  const [textInput, setTextInput] = useState(""); // State to store the entered text
  const [answers, setAnswers] = useState<string[]>([]); // State to store the answers
  const [questionIndex, setQuestionIndex] = useState(0); // State to store the current question index

  const handleSubmit = () => {
    // Here you can submit the text input, for now, let's just log it
    console.log("Submitted text:", textInput);
    const updatedAnswers = [...answers]; // Create a copy of the answers array
    updatedAnswers[questionIndex] = textInput; // Set the answer at questionIndex to be the textInput
    setAnswers(updatedAnswers); // Update the answers state with the updated array
    setTextInput(""); // Clear the text input after submitting
    console.log({ updatedAnswers });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(event.target.value); // Update the text input state when the textarea value changes
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
      {" "}
      {/* Container for both divs */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-3/4 xl:w-2/3 ml-50 mr-50 pt-10 border border-gray-300">
        {" "}
        {/* Adjusted padding and width */}
        {/* Content */}
        <div className="mb-6 pb-16">
          {questions[questionIndex]} : Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quia fuga corporis non nisi ad placeat asperiores
        </div>
        {/* Text Input Area */}
        <div>
          <textarea
            className="w-full h-24 border rounded-md p-2 mt-10" // Added mt-2 for top margin
            placeholder="Enter your text here"
            value={textInput} // Bind textarea value to state
            onChange={handleInputChange} // Call handleInputChange function when the value changes
          />
        </div>
        {/* Submit Button Container */}
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
      <div>
        <button // Submit Button
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
