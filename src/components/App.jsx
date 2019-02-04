import React, { Component } from "react";
import { buildFirebase, getRandomQuestion } from "../clients/firebase";

import "../css/App.css";
// import components
import Question from "./Question.jsx";
class App extends Component {
  constructor(props) {
    super(props);

    var firebaseDatabase = buildFirebase();
    firebaseDatabase.ref("/questions").on("value", snapshot => {
      var questions = snapshot.val();
      var randomQ = getRandomQuestion(questions);
      this.setState({
        questionsList: questions,
        currentQuestion: randomQ
      });
    });
    this.state = {
      currentQuestion: {
        questionText: "Ask q",
        choices: ["a", "b", "c", "d"],
        correct_choice_index: 2
      }
    };
  }
  render() {
    return (
      <div>
        <div className="app">trivia</div>
        <div className="questionWrapper">
          <Question currQuestion={this.state.currentQuestion} />
        </div>
      </div>
    );
  }
}

export default App;
