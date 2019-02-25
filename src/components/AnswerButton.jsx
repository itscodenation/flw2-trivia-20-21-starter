import React, { Component } from "react";
import App from "./App.jsx";
// import components

class AnswerButton extends Component {
  render() {
    var value = this.props.value;
    value = parseInt(value);
    if (value === this.props.correctIndex) {
      console.log(value + " is correct one");
    }
    return (
      <div className="AnswerButton" onClick={this.props.answerButtonClicked}>
        <button className="answerChoice" value={this.props.value}>
          {this.props.letter}: {this.props.answer}
        </button>
      </div>
    );
  }
}

export default AnswerButton;
