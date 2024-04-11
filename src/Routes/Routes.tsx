import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import BasicQuestionsPage from "../Pages/BasicQuestionsPage/BasicQuestionsPage";
import DetailedQuestionsPage from "../Pages/DetailedQuestionsPage/DetailedQuestionsPage";
import LoginScreen from "../Pages/LoginScreen/LoginScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "login", element: <LoginScreen /> },
      { path: "basic_question", element: <BasicQuestionsPage /> },
      { path: "detailed_question", element: <DetailedQuestionsPage /> },
    ],
  },
]);
