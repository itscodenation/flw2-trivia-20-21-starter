import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import { buildFirebase } from "../clients/firebase";
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

    firebaseDatabase.ref("/questions").on("value", snapshot => {
      let questions = snapshot.val();
      //let randomQuestion = getRandomQuestion(questions)
      this.setState({
        questions: questions
        //currentQuestion: randomQuestion,
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Question />
      </div>
    );
  }
}

export default App;
