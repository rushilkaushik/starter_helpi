import React from "react";

interface ResultCardProps {
  suggestedCareerPath: string;
  typeOfSchoolingRequired: string;
  estimatedTimeToQualify: string;
  salaryInformation: string;
  jobDemand: string;
  reasonsForSuitability: string;
}

const ResultCard: React.FC<ResultCardProps> = ({
  suggestedCareerPath,
  typeOfSchoolingRequired,
  estimatedTimeToQualify,
  salaryInformation,
  jobDemand,
  reasonsForSuitability,
}) => {
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
        <h2 className="text-2xl font-bold mb-4">{suggestedCareerPath}</h2>
        <div className="flex justify-between mb-2">
          <p>Type of Schooling Required:</p>
          <p>{typeOfSchoolingRequired}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Estimated Time to Become Qualified:</p>
          <p>{estimatedTimeToQualify}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Salary Information:</p>
          <p>{salaryInformation}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Job Demand:</p>
          <p>{jobDemand}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p>Reasons Why This Job Would Be Suitable for Them:</p>
          <p>{reasonsForSuitability}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
