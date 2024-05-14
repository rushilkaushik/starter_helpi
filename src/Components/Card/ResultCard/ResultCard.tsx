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
      <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-3/4 xl:w-2/3 ml-auto mr-auto pt-10 border border-gray-300 flex flex-col items-center">
        {/* Remove justify-between class to line up elements vertically */}
        {/* <h1> Stuff: {trimmedResultData}</h1> */}
        <h1 className="text-2xl font-bold mb-4">Suggested career path:</h1>
        <p>{dataArray[1]}</p>
        <h1 className="text-2xl font-bold mb-4">Type of schooling required:</h1>
        <p>{dataArray[2]}</p>

        <h1 className="text-2xl font-bold mb-4">
          Estimated time to become qualified:
        </h1>
        <p>{dataArray[3]}</p>

        <h1 className="text-2xl font-bold mb-4">Salary information:</h1>
        <p>{dataArray[4]}</p>

        <h1 className="text-2xl font-bold mb-4">Job demand:</h1>
        <p>{dataArray[5]}</p>

        <h1 className="text-2xl font-bold mb-4">
          Reasons why this job would be suitable for them:
        </h1>
        <p>{dataArray[6]}</p>
      </div>
    </div>
  );
};

export default ResultCard;
