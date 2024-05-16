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
        <p className="text-center pb-2 text-lg">{dataObject.careerPath}</p>

        <h1 className="text-2xl font-bold mb-2">Type of schooling required:</h1>
        <p className="text-center pb-2 text-lg">
          {dataObject.schoolingRequired}
        </p>

        <h1 className="text-2xl font-bold mb-2">
          Estimated time to become qualified:
        </h1>
        <p className="text-center pb-2 text-lg">{dataObject.timeToQualify}</p>

        <h1 className="text-2xl font-bold mb-2">Salary information:</h1>
        <p className="text-center pb-2 text-lg">{dataObject.salaryInfo}</p>

        <h1 className="text-2xl font-bold mb-2">Job demand:</h1>
        <p className="text-center pb-2 text-lg">{dataObject.jobDemand}</p>

        <h1 className="text-2xl font-bold mb-2">
          Reasons why this job would be suitable for them:
        </h1>
        <p className="text-center pb-2 text-lg">
          {dataObject.reasonForSuitability}
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
