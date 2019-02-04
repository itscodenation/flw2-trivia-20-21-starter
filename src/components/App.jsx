import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";

// import components

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: {},
      currentQuestion: {
        question_text: "Question",
        choices: ["1", "2", "3", "4"],
        correct_choice_index: 3
      }
    };
  }

  render() {
    return (
      <div className="app">
        <Question test={this.state.currentQuestion} />
      </div>
    );
  }
}

export default App;
