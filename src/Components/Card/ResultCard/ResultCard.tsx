import React from "react";

interface ResultCardProps {
  resultData: string; // Result data as a JSON string
}

const ResultCard: React.FC<ResultCardProps> = ({ resultData }) => {
  // Parse the JSON string into an object
  const dataObject = JSON.parse(resultData);

  return (
    <div
      className="flex flex-col items-center"
      style={{
        maxWidth: "1200px",
        minWidth: "1200px",
        maxHeight: "500px",
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-3/4 xl:w-2/3 ml-auto mr-auto pt-10 border border-gray-300 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2">
          Suggested Career Path: {dataObject.careerPath}
        </h1>
        <p className="text-center pb-2 text-lg" style={{ color: "black" }}>
          {dataObject.careerDescription}
        </p>

        <h1 className="text-2xl font-bold mb-2">Type of Schooling Required:</h1>
        <p className="text-center pb-2 text-lg" style={{ color: "black" }}>
          {dataObject.schoolingRequired}
        </p>

        <h1 className="text-2xl font-bold mb-2">
          Estimated Time To Become Qualified:
        </h1>
        <p className="text-center pb-2 text-lg" style={{ color: "black" }}>
          {dataObject.timeToQualify}
        </p>

        <h1 className="text-2xl font-bold mb-2">Salary Information:</h1>
        <p className="text-center pb-2 text-lg" style={{ color: "black" }}>
          {dataObject.salaryInfo}
        </p>

        <h1 className="text-2xl font-bold mb-2">Job Demand:</h1>
        <p className="text-center pb-2 text-lg" style={{ color: "black" }}>
          {dataObject.jobDemand}
        </p>

        <h1 className="text-2xl font-bold mb-2">
          Reasons Why This Job Would Be Suitable For You:
        </h1>
        <p className="text-center pb-2 text-lg" style={{ color: "black" }}>
          {dataObject.reasonForSuitability}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
