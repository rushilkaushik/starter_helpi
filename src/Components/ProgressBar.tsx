import React, { useState } from "react";

export const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const handleButtonClick = () => {
        if (progress < 100){
            setProgress(progress + 20);
        }
    }
    const handleButtonReset = () => {
        setProgress(0);
    }

    return <div className="container">
        <div className="progressbar">
            <div className="barfill"
            style={{ width: `${progress}%`, backgroundColor: "#ADD8E6"}}>
                {" "}
            </div>
        </div>
        <div className="percentage">{progress}%</div>
        <button onClick={handleButtonClick}>Next</button>
        <button onClick={handleButtonReset}>Reset</button>
    </div>;
};