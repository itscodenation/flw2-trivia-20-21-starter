import React, { Component } from "react";
import Question from "./Question";
// import components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: {
        questiontext: "sdfghj",
        answers: ["Gulag", "Gulag", "Gulag", "Gulag"],
        canswer: 1
      }
    };
  }

  render() {
    return (
      <div className="app">
        <Question currentQuestion={this.state.currentQuestion} />
      </div>
    );
  }
}

export default App;
