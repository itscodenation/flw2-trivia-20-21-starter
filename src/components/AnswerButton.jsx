import React, { Component } from "react";

// import components

class AnswerButton extends Component {
  render() {
    return (
      <div className="AnswerButton">
        <button className="answerChoice">
          {this.props.letter}: {this.props.answer}
        </button>
      </div>
    );
  }
}

export default AnswerButton;
