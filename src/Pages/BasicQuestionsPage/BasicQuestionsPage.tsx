import React from "react";
import { ProgressBar } from "../../Components/ProgressBar";import Card from "../../Components/Card/Card";

const BasicQuestionsPage = () => {
  return (
    <>
      <div className="flex justify-center pt-20">
        <h1>Basic Questions Page</h1>
      </div>
      <div className="flex justify-center pt-5">
        <Card />
      </div>
      <div className="BasicQuestionsPage">
      balls
      <ProgressBar />
      </div>
    </>
    
  );
};

export default BasicQuestionsPage;
