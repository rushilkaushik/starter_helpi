import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Form } from "react-bootstrap";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Alternate } from "./Pages/Alternate";
import { BasicQ } from "./Pages/BasicQ";
import { DetailedQ } from "./Pages/DetailedQ";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/alternate" element={<Alternate/>}/>
        <Route path="/basicq" element={<BasicQ/>}/>
        <Route path="/detailedq" element={<DetailedQ/>}/>
      </Routes>
    </Router>
  );
}

export default App;
//rushil
//Edmar  Pelayo
//Kushal Gurrapu
