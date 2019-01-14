import React, { Component } from 'react';
import Question from './Question';
// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
        <Question/> 
      </div>
      
    );
  }
}

export default App;