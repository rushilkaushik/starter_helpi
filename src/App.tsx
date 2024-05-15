import React, { useState } from "react";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Alternate from "./Pages/Alternate/Alternate";
import BasicQuestionsPage from "./Pages/BasicQuestionsPage/BasicQuestionsPage";
import DetailedQuestionsPage from "./Pages/DetailedQuestionsPage/DetailedQuestionsPage";
import { Layout } from "./Layout";
import HomePage from "./Pages/HomePage/HomePage";
import ResultsPage from "./Pages/ResultsPage/ResultsPage";
import AboutUs from "./Pages/AboutPage/AboutPage";
import AboutPage from "./Pages/AboutPage/AboutPage";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
export const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App(): JSX.Element {
  const [key, setKey] = useState<string>(keyData); //for api key input

  //sets the local storage item to the api key the user inputed
  function handleSubmit() {
    localStorage.setItem(saveKeyData, JSON.stringify(key));
    window.location.reload(); //when making a mistake and changing the key again, I found that I have to reload the whole site before openai refreshes what it has stores for the local storage variable
  }

  //whenever there's a change it'll store the api key in a local state called key but it won't be set in the local storage until the user clicks the submit button
  function changeKey(event: React.ChangeEvent<HTMLInputElement>) {
    setKey(event.target.value);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/alternate" element={<Alternate />} />
            <Route
              path="/basic-questions-page"
              element={<BasicQuestionsPage />}
            />
            <Route
              path="/detailed-question-page"
              element={<DetailedQuestionsPage />}
            />
            <Route
              path="/about-page"
              element={<AboutPage />}
              />
          </Route>
          <Route path="/results-page" element={<ResultsPage />} />
        </Routes>
      </Router>

      <div className="form-container">
        <Form>
          <div className="input-container">
            <Form.Label className="form-label">API Key:</Form.Label>
            <Form.Control
              className="text-area"
              type="password"
              placeholder="Insert API Key Here"
              onChange={changeKey}
            />
            <Button className="Submit-Button" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default App;
//rushil
//Edmar  Pelayo
//Kushal Gurrapu
