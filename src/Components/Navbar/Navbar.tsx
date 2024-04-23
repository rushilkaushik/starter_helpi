import React from "react";
import { Link } from "react-router-dom";
import cornerlogo from "./cornerlogo.jpeg";
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
            <div className="hidden font-bold lg:flex">
              <Link to="/" className="text-black hover:text-darkBlue">
                Dashboard
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/basic-questions-page">
              <div className="hover:text-darkBlue">Basic Questions Page</div>
            </Link>
            <Link
              to="/detailed-question-page"
              className="px-8 py-3 font-bold rounded text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-70"
            >
              Detailed Questions Page
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
