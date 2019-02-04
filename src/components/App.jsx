import React, { Component } from "react";
import Question from "./Question";
// import components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: {


        questiontext:
          "hksdfh bsfhgg wbrgi sdfgjootyb sdfbropwhgheergt bjhbuui?",
        answers: ["ptoyjdeerwetf", "kkfgb", "sdfg", "sdfgsdf"]

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
