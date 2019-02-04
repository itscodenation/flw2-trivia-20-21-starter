import React, { Component } from "react";
import QuestionText from "./QuestionText.jsx";
import Reset from "./Reset.jsx";
import Answer from "./Answer.jsx";

// import components

class Question extends Component {
  render() {
    return (
      <div>
        <QuestionText questiontext={this.props.currentQuestion.questiontext} />
        <Answer answertext={this.props.currentQuestion.answers[0]} />
        <Answer answertext={this.props.currentQuestion.answers[1]} />
        <Answer answertext={this.props.currentQuestion.answers[2]} />
        <Answer answertext={this.props.currentQuestion.answers[3]} />
        <Reset />
      </div>
    );
  }
}

export default Question;
