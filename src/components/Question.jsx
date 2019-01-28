import React, { Component } from "react";
import QuestionText from "./QuestionText.jsx";
import Reset from "./Reset.jsx";
import Answer from "./Answer.jsx";

// import components

class Question extends Component {
  render() {
    return (
      <div>
        <QuestionText />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Reset />
      </div>
    );
  }
}

export default Question;
