import React, { Component } from "react";
import QuestionText from "./QuestionText.jsx";
import Reset from "./Reset.jsx";
import Answer from "./Answer.jsx";

// import components

class Question extends Component {
  render() {
    return (
      <div>
        <QuestionText questiontext={"can cats fly?"} />
        <Answer answertext={"a"} />
        <Answer answertext={"b"} />
        <Answer answertext={"c"} />
        <Answer answertext={"d"} />
        <Reset />
      </div>
    );
  }
}

export default Question;
