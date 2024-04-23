import React, { useState } from "react";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Alternate from "./Pages/Alternate/Alternate";
import BasicQuestionsPage from "./Pages/BasicQuestionsPage/BasicQuestionsPage";
import DetailedQuestionsPage from "./Pages/DetailedQuestionsPage/DetailedQuestionsPage";
import { Layout } from "./Layout";
import HomePage from "./Pages/HomePage/HomePage";

//local storage and API Key: key should be entered in by the user and will be stored in local storage (NOT session storage)
let keyData = "";
const saveKeyData = "MYKEY";
const prevKey = localStorage.getItem(saveKeyData); //so it'll look like: MYKEY: <api_key_value here> in the local storage when you inspect
if (prevKey !== null) {
  keyData = JSON.parse(prevKey);
}

function App() {
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
          </Route>
        </Routes>
      </Router>

      <div className="App">
        {/* <HomePage /> */}
        {/* <header className="App-header">
          <h1>Who are we: </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            veritatis aperiam recusandae. Fugiat tempora provident doloremque
            perferendis temporibus molestias, animi ea ut odit delectus
            cupiditate! Doloremque iure natus rerum esse. Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Illum odio nihil temporibus ex,
            ab libero perferendis autem ducimus iste neque dignissimos dolorem
            ipsum enim asperiores labore! Incidunt odio optio sit.
          </p>
          <li>Edmar Pelayo</li>
          <li>Rushil Kaushik</li>
          <li>Kushal Gurrapu</li>
        </header> */}
        <div className="App">
          <div className="form-container">
            <Form>
              <Form.Label className="form-label">API Key:</Form.Label>
              <Form.Control
                className="text-area"
                type="password"
                placeholder="Insert API Key Here"
                onChange={changeKey}
              />
              <br></br>
              <Button className="Submit-Button" onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
//rushil
//Edmar  Pelayo
//Kushal Gurrapu
