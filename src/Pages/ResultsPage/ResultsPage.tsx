import React, { useEffect, useState } from "react";
import mascot from "../../Components/Hero/LargeMascot.png";
import "./ResultsPage.css";
import { Link } from "react-router-dom";
import { OpenAI } from "openai";
import ResultCard from "../../Components/Card/ResultCard/ResultCard";

interface Props {
  userData: string;
  userAnswers: string;
}

const ResultsPage: React.FC<Props> = ({ userData, userAnswers }) => {
  const [resultData, setResultData] = useState<any | null>(null); // Changed type to 'any' for flexibility
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

    Send it over as 1 string
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
        setResultData(
          mapToResultCardProps(completion.choices[0].message.content)
        );
        setIsLoading(false); // Set loading state to false after receiving the response
      } catch (error) {
        console.error("OpenAI API Error:", error);
      }
    }

    main();
  }, [apiKey]);

  // Function to map OpenAI response to ResultCard props
  const mapToResultCardProps = (data: any): any => {
    // Assuming the structure of data received from OpenAI matches the expected format
    console.log("Received data from OpenAI:", data.typeOfSchoolingRequired);

    return {
      suggestedCareerPath: data.suggestedCareerPath,
      typeOfSchoolingRequired: data.typeOfSchoolingRequired,
      estimatedTimeToBecomeQualified: data.estimatedTimeToBecomeQualified,
      salaryInformation: data.salaryInformation,
      jobDemand: data.jobDemand,
      reasonsWhySuitable: data.reasonsWhySuitable,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-blue-500">
      <div className="flex flex-col items-center justify-center">
        {isLoading ? (
          <div className="mt-4 text-center">
            <img
              src={mascot}
              alt="Mascot"
              className="w-1/4 mascot-animation mx-auto"
            />
            Loading...
          </div>
        ) : (
          resultData && <ResultCard {...resultData} />
        )}
        {/* Display ResultCard */}
        <div className="mt-4">User Answers: {userAnswers}</div>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ResultsPage;
