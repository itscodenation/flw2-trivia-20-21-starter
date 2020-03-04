import React, { Component } from 'react';
// import components
import {buildFirebase} from '../clients/firebase.js';




class Question extends Component {

  
  render() {
    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then(function(data) {
    const questions = data.val();
  // Do something with the questions  
    });
    return (
      <div>
        Add your QuestionText, Reset Button and AnswerButtons here.  
      </div>
    );
  }
}

export default Question;