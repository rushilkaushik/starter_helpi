import React from "react";

interface ResultCardProps {
  resultData: string; // Result data as a JSON string
}

const ResultCard: React.FC<ResultCardProps> = ({ resultData }) => {
  // Print the type of resultData
  console.log("Type of resultData:", typeof resultData);

  // Parse the JSON string into an object
  var dataObject = resultData;
  dataObject = dataObject.substring(18, dataObject.length - 6);
  const aiArray: string[] = dataObject.split(",");

  console.log("Result Data Thing:", dataObject);

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
        <h1 className="text-2xl font-bold mb-2">Suggested career path:</h1>
        <p>{aiArray[0]}</p>
        <h1 className="text-2xl font-bold mb-2">Type of schooling required:</h1>
        <p>{aiArray[1]}</p>
        <h1 className="text-2xl font-bold mb-2">
          Estimated time to become qualified:
        </h1>
        <p>{aiArray[2]}</p>
        <h1 className="text-2xl font-bold mb-2">Salary information:</h1>
        <p>
          {aiArray[3]},{aiArray[4]}
        </p>
        <h1 className="text-2xl font-bold mb-2">Job demand:</h1>
        <p>{aiArray[5]}</p>
        <h1 className="text-2xl font-bold mb-2">
          Reasons why this job would be suitable for them:
        </h1>
        <p>{aiArray[6]}</p>
      </div>
    </div>
  );
};

export default ResultCard;
