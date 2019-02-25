import React, { Component } from "react";
import App from "./App.jsx";
// import components

class AnswerButton extends Component {
  render() {
    return (
      <div className="AnswerButton" onClick={this.props.answerButtonClicked}>
        <button className="answerChoice">
          {this.props.letter}: {this.props.answer}
        </button>
      </div>
    );
  }
}

export default AnswerButton;
