import React from "react";

interface ResultCardProps {
  resultData: string; // Added userData prop
}

const ResultCard: React.FC<ResultCardProps> = ({ resultData }) => {
  // Remove the first 25 characters
  const trimmedResultData = resultData.substring(25);

  // Split the trimmedResultData string into an array
  const dataArray = trimmedResultData.split(": ");

  // Log the dataArray
  console.log("Split Data Array: ", dataArray);

  return (
    <div
      className="flex flex-col items-center"
      style={{
        maxWidth: "1000px",
        minWidth: "1000px",
        maxHeight: "500px",
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-3/4 xl:w-2/3 ml-auto mr-auto pt-10 border border-gray-300">
        {/* Remove justify-between class to line up elements vertically */}
        {dataArray.map((item, index) => (
          <p key={index}>
            <span>{index + 1}. </span>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResultCard;
