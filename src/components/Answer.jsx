import React, { Component } from "react";
// import components

var answerArray = [];
class Answer extends Component {
  render() {
    for (var i = 0; i < answerArray.length; i++) {
      <div class="answer">
        <p class="answerText">answerArray[i];</p>
      </div>;
    }

    return <div />;
  }
}
