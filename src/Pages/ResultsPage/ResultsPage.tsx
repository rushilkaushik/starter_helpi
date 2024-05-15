import React, { useEffect, useState } from "react";
import mascot from "../../Components/Hero/LargeMascot.png";
import "./ResultsPage.css";
import { Link } from "react-router-dom";
import { OpenAI } from "openai";
import ResultCard from "../../Components/Card/ResultCard/ResultCard";
import background from "../../Components/Hero/background.png";

interface Props {
  userData: string;
  userAnswers: string;
}

const ResultsPage: React.FC<Props> = ({ userData, userAnswers }) => {
  const [resultData, setResultData] = useState<string | null>(null); // Changed type to string
  const [apiKey, setApiKey] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

    Send it over as 1 string like this:
    Send it over in this exact format. Do not send it as a json object. Send it over as 1 string with this exact format:
    Do not add extra words just a string seperate by , like the following
    {"message" : "Software Developer","Bachelor's degree in Computer Science or related field", "4 years", "$105,000 per year (median)","High", "Your strong problem-solving skills will make you an excellent Software Developer. Your passion for technology and programming would be a great fit for this role, and your ability to work effectively in teams will be beneficial in collaborative development environments."}

    Ensure your response is informative, well-structured, and provides valuable insights for the user.
  `;

  useEffect(() => {
    async function main() {
      const apiKeyFromStorage =
        (localStorage.getItem("MYKEY") ?? "").slice(1, -1) ?? "";
      console.log("API Key from Storage:", apiKeyFromStorage);

      setApiKey(apiKeyFromStorage);

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
              content: user_prompt,
            },
          ],
          model: "gpt-3.5-turbo",
          response_format: { type: "json_object" },
        });
        console.log(completion.choices[0].message.content);
        setResultData(JSON.stringify(completion.choices[0].message.content)); // Convert to string
        setIsLoading(false); // Set loading state to false after receiving the response
      } catch (error) {
        console.error("OpenAI API Error:", error);
      }
    }

    main();
  }, [apiKey]);

  return (
    <section
      id="Hero"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center", // Adjust the position here
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-top h-screen text-blue-500 mt-15">
        <h1 className="text-4xl font-bold mb-6">Your Results</h1>{" "}
        {/* Bigger and bold */}
        <div className="flex flex-col items-center justify-center">
          {resultData && <ResultCard resultData={resultData} />}{" "}
          {/* Move ResultCard here */}
          {isLoading ? (
            <div className="mt-4 text-center">
              <img
                src={mascot}
                alt="Mascot"
                className="w-1/4 mascot-animation mx-auto"
              />
              Loading...
            </div>
          ) : null}{" "}
          {/* Hide loading section if not loading */}
          {/* Display User Answers */}
        </div>
      </div>
      <Link to="/">Back to Home</Link>
    </section>
  );
};

export default ResultsPage;
