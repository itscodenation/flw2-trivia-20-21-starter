import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import { buildFirebase } from "../clients/firebase.js";
// import components
const firebaseDatabase = buildFirebase();
class App extends Component {
  constructor(props) {
    super(props);
    firebaseDatabase.ref("/questions").on("value", snapshot => {
      let questions = snaphot.val();
      // let randomQuestion = getRandomQuestion(questions)
      // this.setState({
      //   questions: questions,
      //   currentQuestion: randomQuestion,
      // })
      console.log(questions);
    });

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
