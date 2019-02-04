import React, { Component } from "react";
// import components
// questions :
import "./Question.css";

class Question extends Component {
  render() {
    return (
      <div className="Question">
        <p>{this.props.question}</p>
      </div>
    );
  }
}

export default Question;
