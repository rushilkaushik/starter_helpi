import React from "react";
import mascot from "../../Components/Hero/LargeMascot.png";
import "./ResultsPage.css";
import { Link } from "react-router-dom";

const ResultsPage = () => {
  return (
    <Link to="/">
      <div className="flex flex-col items-center justify-center h-screen text-blue-500">
        <div className="flex flex-col items-center justify-center">
          <img src={mascot} alt="Mascot" className="w-1/4 mascot-animation" />

          <div className="text-6xl mt-4">Under Construction</div>
        </div>
      </div>
    </Link>
  );
};

export default ResultsPage;
