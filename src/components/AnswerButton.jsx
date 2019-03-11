import React, { Component } from "react";
import App from "./App.jsx";
import "../css/App.css";
// import components

class AnswerButton extends Component {
  render() {
    console.log(this.props.correctIndex);
    var value = this.props.value;
    value = parseInt(value);
    if (value === this.props.correctIndex) {
      console.log(value + " is correct one");
    }
    let Acolor;
    if (this.props.shouldDisplayAnswer) {
      if (this.props.value == this.props.correctIndex) {
        Acolor = "Green";
      } else {
        Acolor = "Red";
      }
    } else {
      Acolor = "black";
    }
    return (
      <div className="AnswerButton" onClick={this.props.answerButtonClicked}>
        <button
          style={{ color: Acolor }}
          className="answerChoice"
          value={this.props.value}
        >
          {this.props.letter}: {this.props.answer}
        </button>
      </div>
    );
  }
}

export default AnswerButton;
