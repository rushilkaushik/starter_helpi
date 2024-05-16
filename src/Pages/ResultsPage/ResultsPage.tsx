import React, { useEffect, useState } from "react";
import mascot from "../../Components/Hero/LargeMascot.png";
import "./ResultsPage.css";
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
    - Reason why this job would be suitable for them

    Send it over as a Json Object in this format: This is an example. Do not send the same thing
    {
      "careerPath": "Software Developer",
      "schoolingRequired": "Bachelor's degree in computer science or related field",
      "timeToQualify": "4 years",
      "salaryInfo": "Median annual salary of $105,590 (May 2020) according to the U.S. Bureau of Labor Statistics",
      "jobDemand": "Projected to grow 22% from 2019 to 2029, much faster than average",
      "reasonForSuitability": "Your interest in technology and problem-solving, coupled with demonstrated aptitude in TypeScript, aligns seamlessly with the demands of a software developer role. Additionally, the software development industry boasts a multitude of career paths and ample opportunities for professional advancement and growth."
  }
    This is an example. However answer based on the answers you recieve from the user below
    Ensure your response is informative, well-structured, and provides valuable insights for the user.
    This is the user data ${userData} and this is the user's Answers ${userAnswers}
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
        console.log("User prompt", user_prompt);
        setResultData(completion.choices[0].message.content); // Convert to string
        setIsLoading(false); // Set loading state to false after receiving the response
      } catch (error) {
        console.error("OpenAI API Error:", error);
      }
    }

    main();
  }, [apiKey, user_prompt]);

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
      <div className="flex flex-col items-center justify-top h-screen text-blue-500 mt-15 relative">
        <h1 className="text-4xl font-bold mb-6">Your Results</h1>
        <div className="flex flex-col items-center justify-center">
          {resultData && (
            <div>
              <div className="absolute bottom-24 right-4 mb-20 translate-x-10">
                <img src={mascot} alt="Mascot" className="w-1/4" />
              </div>
              <ResultCard resultData={resultData} />
            </div>
          )}
          {isLoading ? (
            <div className="mt-4 text-center">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img
                  src={mascot}
                  alt="Mascot"
                  className="w-1/4 mascot-animation"
                />
              </div>
              Loading...
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default ResultsPage;
