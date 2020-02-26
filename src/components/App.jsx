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
      userIsCorrect: false,
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
  _onAnswerButtonClicked(btnValue) {
    //console.log("This button you clicked " + parseInt(btnValue));
    //console.log("Correct Answer " + this.state.currentQuestion.correct_choice_index);
    let status = false;
    if (
      parseInt(btnValue) === this.state.currentQuestion.correct_choice_index
    ) {
      status = true;
    } else {
      status = false;
    }

    this.setState({
      shouldDisplayAnswer: true,
      userIsCorrect: status
    });
  }
  _onResetButtonClicked() {
    let randomQuestion = getRandomQuestion(this.state.questions);
    this.setState({
      currentQuestion: randomQuestion,
      shouldDisplayAnswer: false,
      userIsCorrect: false
    });
  }

  render() {
    let test = true;

    return (
      <div className="app">
        <Question
          test={this.state.currentQuestion}
          answerButtonClicked={id => this._onAnswerButtonClicked(id)}
          resetButtonClicked={() => this._onResetButtonClicked()}
          shouldDisplayAnswer={this.state.shouldDisplayAnswer}
          userIsCorrect={this.state.userIsCorrect}
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
