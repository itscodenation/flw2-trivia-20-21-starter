import React, { Component } from 'react';
// import components
import ResetButton from'./ResetButton.jsx';
import QuestionText from './QuestionText.jsx';
import AnswerButton from './AnswerButton.jsx';


class Question extends Component {
  
  render() {
    return (
      <div className="div1">
          <div className="div2">
                <ResetButton />
          </div>
          <div className="div3">
                <QuestionText />
          </div>
          <div className="div4">
                <div className="div5">
                      <AnswerButton />
                </div>
                <div className="div6">
                      <AnswerButton />
                </div>
                <div className="div7">
                      <AnswerButton />
                </div>
                <div className="div8">
                      <AnswerButton />
                </div>
          </div>
      </div>
    );
  }
}

export default Question;