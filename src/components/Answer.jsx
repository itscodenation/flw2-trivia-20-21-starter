import React, { Component } from "react";
// import components
class Answer extends Component {
  render() {
    return (
      <div>
        <button>{this.props.answertext}</button>
      </div>
    );
  }
}

export default Answer;
