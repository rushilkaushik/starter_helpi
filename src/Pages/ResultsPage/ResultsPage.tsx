import React, { useEffect } from "react";
import mascot from "../../Components/Hero/LargeMascot.png";
import "./ResultsPage.css";
import { Link } from "react-router-dom";
import OpenAI from "openai";

export type Completion = {
  id: string;
  object: string;
  created: number;
  model: string;
  system_fingerprint: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
    };
    logprobs: any;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

const ResultsPage: React.FC = () => {
  useEffect(() => {
    const apiKey: string | null = localStorage.getItem("MYKEY"); // Retrieve API key from local storage
    if (apiKey) {
      const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true }); // Allow browser-like environment
      main(openai);
    } else {
      console.error("API key not found in local storage.");
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

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

async function main(openai: OpenAI): Promise<void> {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Hello, I need some assistance." }],
      model: "gpt-3.5-turbo",
    });
    console.log(completion.choices[0]?.message);
  } catch (error) {
    console.error("Error fetching completion:", error);
  }
}

export default ResultsPage;
