import React, { Component } from "react";

class AnswerButton extends Component {
  render() {
    return (
      <div className="app">
        <div>Answer 1</div>
        {this.props.answerchoice}
      </div>
    );
  }
}
export default AnswerButton;
