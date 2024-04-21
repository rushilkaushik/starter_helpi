import React from "react";
import "./HomePage.css"; // Import your CSS file
import JobMatchAI from "../../assets/JobMatchAILarge.png";
import Hero from "../../Components/Hero/hero";

interface HomePageProps {
  // Define any props here if needed.
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default HomePage;
