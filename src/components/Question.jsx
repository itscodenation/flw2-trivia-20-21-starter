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
          <ResetButton resetButtonClicked={this.props.resetButtonClicked} />
        </div>
        <div className="div3">
          <QuestionText
            correctAnswer={this.props.correctAnswer}
            shouldDisplayAnswer={this.props.shouldDisplayAnswer}
            question={this.props.test.question_text}
          />
        </div>
        <div className="div4">
          <div className="div5">
            <AnswerButton
              shouldDisplayAnswer={this.props.shouldDisplayAnswer}
              correctIndex={this.props.test.correct_choice_index}
              value="0"
              letter="A"
              answer={this.props.test.choices[0]}
              answerButtonClicked={this.props.answerButtonClicked}
            />
          </div>
          <div className="div6">
            <AnswerButton
              shouldDisplayAnswer={this.props.shouldDisplayAnswer}
              correctIndex={this.props.test.correct_choice_index}
              value="1"
              letter="B"
              answer={this.props.test.choices[1]}
              answerButtonClicked={this.props.answerButtonClicked}
            />
          </div>
          <div className="div7">
            <AnswerButton
              shouldDisplayAnswer={this.props.shouldDisplayAnswer}
              correctIndex={this.props.test.correct_choice_index}
              value="2"
              letter="C"
              answer={this.props.test.choices[2]}
              answerButtonClicked={this.props.answerButtonClicked}
            />
          </div>
          <div className="div8">
            <AnswerButton
              shouldDisplayAnswer={this.props.shouldDisplayAnswer}
              correctIndex={this.props.test.correct_choice_index}
              value="3"
              letter="D"
              answer={this.props.test.choices[3]}
              answerButtonClicked={this.props.answerButtonClicked}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
