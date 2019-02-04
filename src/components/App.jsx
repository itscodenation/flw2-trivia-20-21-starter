import React, { Component } from "react";
import "../css/App.css";
import Question from "./Question.jsx";
import { buildFirebase } from "../clients/firebase";
// import components
var firebaseDatabase = buildFirebase();

class App extends Component {
  constructor(props) {
    super(props);

    firebaseDatabase.ref("/questions").on("value", snapshot => {
      console.log(snapshot.val());
    });
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
