import React from "react";
import Card from "../../Components/Card/Card";
interface Props {}

const DetailedQuestionsPage = (props: Props) => {
  return (
    <>
      <div className="flex justify-center pt-20">
        <h1>Detailed Questions Page</h1>
      </div>
      <div className="flex justify-center pt-5">
        <Card 
          questions={["dq1?", "dq2?", "dq3?"]}
        />
      </div>
    </>
  );
};

export default DetailedQuestionsPage;
