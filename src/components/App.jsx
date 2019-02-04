import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import AnswerList from "./AnswerList.jsx";
import Answer from "./Answer.jsx";
// import components

import { buildFirebase } from "../clients/firebase";
var firebaseDatabase = buildFirebase();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: {
        questionText: "What planet is closest to the sun?",
        answer: ["Mars", "Mercury", "Jupiter", "Earth"],
        correctAnsIdx: 1
      }
    };
  }
  render() {
    return (
      <div className="app">
        <Question question={this.state.currentQuestion.questionText} />
        <AnswerList
          answer={this.state.currentQuestion.answer}
          correctAnsIdx={this.state.currentQuestion.correctAnsIdx}
        />
      </div>
    );
  }
}

export default App;
