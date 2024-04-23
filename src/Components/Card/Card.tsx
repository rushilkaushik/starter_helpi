import React, { useState } from "react";

interface Props {}

const Card: React.FC<Props> = (props) => {
  const [textInput, setTextInput] = useState(""); // State to store the entered text

  const handleSubmit = () => {
    // Here you can submit the text input, for now, let's just log it
    console.log("Submitted text:", textInput);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(event.target.value); // Update the text input state when the textarea value changes
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-1/3">
      {/* Content */}
      <div className="mb-4 pb-16">
        Questions 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium, vero vel neque incidunt nihil doloremque voluptatibus iusto
        rerum consequuntur eveniet, ipsam consequatur odio aliquam dolorum
        quisquam, quis quod at maiores.
      </div>
      {/* Text Input Area */}
      <div>
        <textarea
          className="w-full h-24 border rounded-md p-2 mt-2" // Added mt-2 for top margin
          placeholder="Enter your text here"
          value={textInput} // Bind textarea value to state
          onChange={handleInputChange} // Call handleInputChange function when the value changes
        />
      </div>
      {/* Submit Button Container */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Card;
