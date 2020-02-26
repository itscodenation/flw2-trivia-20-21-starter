import React, { Component } from "react";

// import components

class QuestionText extends Component {
  render() {
    let display;

    if (this.props.shouldDisplayAnswer) {
      if (this.props.userIsCorrect) {
        display = "You chose the correct answer!";
      } else {
        display = "The correct answer is " + this.props.correctAnswer;
      }
    } else {
      display = this.props.question;
    }

    return (
      <div style={{ color: "White" }} className="QuestionText.jsx">
        <h3>{display}</h3>
      </div>
    );
  }
}

export default QuestionText;
