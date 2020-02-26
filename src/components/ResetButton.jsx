import React, { Component } from "react";
import "../css/App.css";
// import components

class ResetButton extends Component {
  render() {
    return (
      <div className="ResetButton" onClick={this.props.resetButtonClicked}>
        <button className="reset">Reset</button>
      </div>
    );
  }
}

export default ResetButton;
