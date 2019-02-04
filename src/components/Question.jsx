import React, { Component } from "react";
// import components
import ResetButton from "./ResetButton.jsx";
import QuestionText from "./QuestionText.jsx";
import AnswerButton from "./AnswerButton.jsx";
import App from "./App.jsx";
var array = [];
class Question extends Component {
  render() {
    return (
      <div className="div1">
        <div className="div2">
          <ResetButton />
        </div>
        <div className="div3">
          <QuestionText question={"this.props.test.question_text"} />
        </div>
        <div className="div4">
          <div className="div5">
            <AnswerButton letter="A" answer={"this.props.test.choices[0]"} />
          </div>
          <div className="div6">
            <AnswerButton letter="B" answer={"this.props.test.choices[1]"} />
          </div>
          <div className="div7">
            <AnswerButton letter="C" answer={"this.props.test.choices[2]"} />
          </div>
          <div className="div8">
            <AnswerButton letter="D" answer={"this.props.test.choices[3]"} />
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
