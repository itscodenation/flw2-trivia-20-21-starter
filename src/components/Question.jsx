import React, { Component } from "react";
// import components
import QuestionText from "./QuestionText.jsx";
import AnswerButton from "./AnswerButton.jsx";

class Question extends Component {
  render() {
    return (
      <div>
        <QuestionText text={this.props.currQuestion.questionText} />
        <div>
          <AnswerButton answerchoice={this.props.currQuestion.choices[0]} />
          <AnswerButton answerchoice={this.props.currQuestion.choices[1]} />
          <AnswerButton answerchoice={this.props.currQuestion.choices[2]} />
          <AnswerButton answerchoice={this.props.currQuestion.choices[3]} />
        </div>
      </div>
    );
  }
}

export default Question;
