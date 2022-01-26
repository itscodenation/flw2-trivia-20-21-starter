import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  // const state, setState = useState()
  const [questionNumber, setQuestionNumber] = useState(0);
  return (
    <div className="app">
      Trivia!
      <Question />
      <Question text={data[questionNumber].question.text} />
      <Question text={data[1].question.text} />
      {/* {console.log(data[0])} */}
    </div>
  );
}

function Question(props) {
  return <div>{props.text}</div>;
}

export default App;
