import React, { useState } from "react";
import "./ProgressBar.css"

export const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const handleButtonNext = () => {
        if (progress < 100){
            setProgress(progress + 20);
        }
    }
    const handleButtonPrev = () => {
        if (progress > 0){
            setProgress(progress - 20);
        }
    }

    return <><div className="flex justify-center mt-4">
        <div className="w-[30rem] rounded-full bg-gray-100 p-1">
            <div className="bg-blue-300 h-full rounded-full w-[20%] text-white font-medium p-1 text-xs text-center"
                style={{ width: `${progress}%`, backgroundColor: "#ADD8E6" }}>
                {" "}
            </div>
        </div>
        <div className="percentage">{progress}%</div>
        </div>
        <div className="flex justify-center mt-4">
        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded" onClick={handleButtonPrev}>Previous</button>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-2 px-4 rounded" onClick={handleButtonNext}>Next</button>
        </div>
    </>
;
};