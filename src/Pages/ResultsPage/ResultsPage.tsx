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
    const apiKey: string | null = localStorage.getItem("MYKEY");
    if (apiKey) {
      const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
      simulateConversation(openai);
    } else {
      console.error("API key not found in local storage.");
    }
  }, []);

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

async function simulateConversation(openai: OpenAI): Promise<void> {
  try {
    const userMessage = "Hello, I need some assistance.";
    const userCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: userMessage }],
      model: "gpt-3.5-turbo",
    });
    console.log("User message:", userCompletion.choices[0]?.message.content);

    const systemCompletion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "" }],
      model: "gpt-3.5-turbo",
    });
    console.log(
      "System response:",
      systemCompletion.choices[0]?.message.content
    );
  } catch (error) {
    console.error("Error during conversation simulation:", error);
  }
}

export default ResultsPage;
