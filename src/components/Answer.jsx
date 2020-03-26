import React, { Component } from "react";
// import components
import "../css/Answer.css";

class Answer extends Component {
  render() {
    return (
      <div className="Answer">
        <p>{this.props.name}</p>
      </div>
    );
  }
}
