import React, { useEffect, useState } from "react";
import mascot from "../../Components/Hero/LargeMascot.png";
import "./ResultsPage.css";
import { Link } from "react-router-dom";
import { OpenAI } from "openai"; // Import OpenAI like this if it's exported as a named export

const ResultsPage: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null); // State to store the response
  const [apiKey, setApiKey] = useState<string>(""); // State to store the API key

  useEffect(() => {
    async function main() {
      const apiKeyFromStorage =
        localStorage.getItem("MYKEY")?.slice(1, -1).replace(/\s/g, "") ?? "";

      setApiKey(apiKeyFromStorage); // Set the API key in state
      console.log("Formatted Api Key Thing:", apiKeyFromStorage);
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
        console.error(error);
      }
    }

    main();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-blue-500">
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
