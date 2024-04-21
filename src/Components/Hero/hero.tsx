import React from "react";
import hero from "./adjusted.png";
import "./Hero.css";
import background from "./background.png";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center", // Adjust the position here
        height: "100vh",
      }}
    >
      <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row pt-20">
        <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52">
          <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
            Welcome to
          </h1>
          <div className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left bg-gradient-to-r text-transparent bg-clip-text from-blue-500 to-indigo-500">
            JobMatchAI
          </div>
          <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
            Find the best career choice for you.
          </p>
          <div className="mx-auto lg:mx-0">
            <a
              href=""
              className="py-5 px-10 text-2xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded lg:py-4 hover:opacity-70"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
