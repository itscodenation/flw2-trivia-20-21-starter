import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

let questionNumber = 0;

function Question(props) {
  return <div>{props.text}</div>
}

function App() {
  return <div className="app">
    Trivia!
    <Question text={data[questionNumber].question.text} />
  </div>;
}

export default App;
