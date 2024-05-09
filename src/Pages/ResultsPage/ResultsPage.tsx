import React from "react";
import mascot from "../../Components/Hero/LargeMascot.png";
import "./ResultsPage.css";
const ResultsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-blue-500">
      <img src={mascot} alt="Mascot" className="w-1/4 mascot-animation" />
      {/* Adjust the width here */}
      <div className="text-6xl">Under Construction</div>
    </div>
  );
};

export default ResultsPage;
