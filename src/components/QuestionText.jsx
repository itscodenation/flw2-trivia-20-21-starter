import React, { Component } from "react";

// import components

class QuestionText extends Component {
  render() {
    return (
      <div className="QuestionText.jsx">
        <h3>{this.props.question}</h3>
      </div>
    );
  }
}

export default QuestionText;
