import React, { useEffect, useState } from "react";
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
  const [systemResponse, setSystemResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const apiKey: string | null = localStorage.getItem("MYKEY");
    if (apiKey) {
      const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });
      simulateConversation(openai);
    } else {
      console.error("API key not found in local storage.");
    }
  }, []);

  async function simulateConversation(openai: OpenAI) {
    try {
      setLoading(true); // Set loading to true before starting the simulation

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
      const systemResponse = systemCompletion.choices[0]?.message.content;
      console.log("System response:", systemResponse);
      setSystemResponse(systemResponse);
    } catch (error) {
      console.error("Error during conversation simulation:", error);
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  }

  return (
    <Link to="/">
      <div className="flex flex-col items-center justify-center h-screen text-blue-500">
        <div className="flex flex-col items-center justify-center">
          <img src={mascot} alt="Mascot" className="w-1/4 mascot-animation" />
          <div className="text-6xl mt-4">Under Construction</div>
          {loading && <div>Loading...</div>}
          {systemResponse && (
            <div className="mt-4">System Response: {systemResponse}</div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ResultsPage;
