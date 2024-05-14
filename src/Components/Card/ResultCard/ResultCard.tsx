import React from "react";

interface ResultCardProps {
  resultData: string; // Added userData prop
}

const ResultCard: React.FC<ResultCardProps> = ({ resultData }) => {
  // Parse the resultData string into a JavaScript object
  const parsedData = JSON.parse(resultData);

  // Stringify the parsedData object with indentation for readability
  const formattedData = JSON.stringify(parsedData, null, 2);

  // Log formattedData
  console.log("Formatted Result Data: ", formattedData);

  return (
    <div
      className="flex flex-col items-center"
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
      <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-3/4 xl:w-2/3 ml-auto mr-auto pt-10 border border-gray-300">
        <div className="flex justify-between mb-2">
          {/* Display formattedData inside a pre tag with white-space: pre-wrap */}
          <pre style={{ whiteSpace: "pre-wrap" }}>{formattedData}</pre>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
