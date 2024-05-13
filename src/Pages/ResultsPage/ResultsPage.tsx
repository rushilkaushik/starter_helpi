import React, { useEffect, useState } from "react";
import mascot from "../../Components/Hero/LargeMascot.png";
import "./ResultsPage.css";
import { Link } from "react-router-dom";
import { OpenAI } from "openai"; // Import OpenAI like this if it's exported as a named export

const ResultsPage: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null); // State to store the response
  const [apiKey, setApiKey] = useState<string>(""); // State to store the API key

  const user_prompt = `
  You will be given a TypeScript Hashmap in the following format:

  interface Props {
    questions: string[];
    onInputChange: (question: string, answer: string) => void;
    answers: { [key: string]: string };
  }

  Based on the questions and answers provided, your task is to suggest a career path for the user. Your response should include the following details:

  - Suggested career path
  - Type of schooling required
  - Estimated time to become qualified
  - Salary information
  - Job demand
  - Reasons why this job would be suitable for them

  Ensure your response is informative, well-structured, and provides valuable insights for the user.
`;

  useEffect(() => {
    async function main() {
      const apiKeyFromStorage =
        localStorage.getItem("MYKEY")?.slice(1, -1).replace(/\s/g, "") ?? "";
      console.log("API Key from Storage:", apiKeyFromStorage); // Log the API key

      setApiKey(apiKeyFromStorage); // Set the API key in state

      const openai = new OpenAI({
        apiKey: apiKeyFromStorage,
        dangerouslyAllowBrowser: true,
      });
      try {
        const completion = await openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content:
                "You are a career selection assistant. Help the user find the best job based on their preferences and skills. Return the results in a JSON object.",
            },
            {
              role: "user",
              content: "Tell me good night",
            },
          ],
          model: "gpt-3.5-turbo",
          response_format: { type: "json_object" },
        });
        setResponse(completion.choices[0].message.content); // Set the response in state
      } catch (error) {
        console.error("OpenAI API Error:", error);
      }
    }

    main();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-blue-500">
      <h2>API Key:{apiKey}</h2> {/* Display the API key */}
      <div className="flex flex-col items-center justify-center">
        <img src={mascot} alt="Mascot" className="w-1/4 mascot-animation" />
        {response && <div>{response}</div>}{" "}
        {/* Render the response if it exists */}
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ResultsPage;
