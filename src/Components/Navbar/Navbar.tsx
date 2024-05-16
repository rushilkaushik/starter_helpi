import React from "react";
import { Link } from "react-router-dom";
import cornerlogo from "./cornerlogo.jpeg";
import { Tooltip } from "./ToolTip";
interface Props {}

export function Navbar(props: Props) {
  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center space-x-20">
            
            <Link to="/">
              <img src={cornerlogo} alt="" />
            </Link>

            <div className="hidden font-bold lg:flex space-x-6">
              
              <Link to="/" className="text-black hover:text-darkBlue">
                Dashboard
              </Link>

              <Link to="/about-page" className="text-black hover:text-darkBlue">
                About 
              </Link>

            </div>
          </div>
            
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Tooltip content="Streamlined multiple-choice evaluation designed to explore individual strengths, preferences, and aspirations in depth"
              arrow1="absolute hidden group-hover:inline-block -mt-[calc(8%)] ml-[calc(50%-30px)] -mb-[1px] overflow-hidden"
              arrow2="h-10 w-10 origin-bottom-left rotate-45 transform bg-neutral-100"
              box="absolute hidden group-hover:inline-block bg-neutral-100 text-darkBlue text-xs p-2 whitespace-normal rounded left-1/2 w-full -translate-x-1/2 top-[calc(100%+5px)]"
              >
              <Link to="/basic-questions-page">
                <div className="hover:text-darkBlue">Basic Questions Page</div>
              </Link>
            </Tooltip>
            
            <Tooltip content="Comprehensive free-response analysis encompassing a wide range of questions to offer nuanced insights and personalized recommendations"
              box="absolute hidden group-hover:inline-block text-white text-xs p-2 whitespace-normal rounded left-1/2 w-3/4 -translate-x-1/2 top-[calc(100%+20px)] bg-gradient-to-r from-cyan-500 to-blue-500"
              arrow1="absolute hidden group-hover:inline-block ml-[calc(50%-30px)] -mb-[1px] overflow-hidden"
              arrow2="h-10 w-10 origin-bottom-left rotate-45 transform bg-gradient-to-br from-cyan-500 to-blue-500"
              >
              <Link
                  to="/detailed-question-page"
                  className="px-8 py-3 font-bold rounded text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-70"
                >
                Detailed Questions Page
              </Link>
            </Tooltip>
          </div>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
