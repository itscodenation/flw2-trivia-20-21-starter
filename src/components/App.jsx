import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import { buildFirebase } from "../clients/firebase";
import { getRandomQuestion } from "../clients/firebase";
// import components
var firebaseDatabase = buildFirebase();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: {},
      currentQuestion: {
        question_text: "Question",
        choices: [],
        correct_choice_index: null
      }
    };

    firebaseDatabase
      .ref("/questions")
      .once("value")
      .then(snapshot => {
        let questions = snapshot.val();
        let randomQuestion = getRandomQuestion(questions);
        this.setState({
          questions: questions,
          currentQuestion: randomQuestion
        });
      });
  }
  _onAnswerButtonClicked() {
    console.log("Hit");
    this.setState({
      shouldDisplayAnswer: true
    });
    
  }
  _onResetButtonClicked() {
    let randomQuestion = getRandomQuestion(this.state.questions);
    this.setState({
      currentQuestion: randomQuestion,
      shouldDisplayAnswer: false
    });
  }
  render() {
    return (
      <div className="app">
        <Question
          test={this.state.currentQuestion}
          answerButtonClicked={() => this._onAnswerButtonClicked()}
          resetButtonClicked={() => this._onResetButtonClicked()}
          shouldDisplayAnswer={this.state.shouldDisplayAnswer}
          correctAnswer={
            this.state.currentQuestion.choices[
              this.state.currentQuestion.correct_choice_index
            ]
          }
        />
      </div>
    );
  }
}

export default App;
