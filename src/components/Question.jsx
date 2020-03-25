import React, { Component } from 'react';
// import components
import {buildFirebase} from '../clients/firebase.js';

import questions from '../sample_data.js';
// var correct = false;

class Question extends Component {
  
  isCorrect = (index, correctIndex) => {
    if(index === correctIndex){
      // document.getElementById("result").innerHTML = "You are correct";
      // alert("Correct")
    }else{
      // document.getElementById("result").innerHTML = "Try again";
    };
  };

  render() {
    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then(function(data) {
    // const questions = data.val();
  // Do something with the questions  
    });

    
    return (
      <div>
        {questions.map(question => (
          <div>
            <h1>{question.Question}</h1>
            <p id="result"></p>
            <button onClick={(e) => (0 === question.correctAnswerIndex ? alert("Correct") : alert("Try Again"))}>{question.Answer[0]}</button>
            <button onClick={(e) => (1 === question.correctAnswerIndex ? alert("Correct") : alert("Try Again"))}>{question.Answer[1]}</button>
            <button onClick={(e) => (2 === question.correctAnswerIndex ? alert("Correct") : alert("Try Again"))}>{question.Answer[2]}</button>
            <button onClick={(e) => (3 === question.correctAnswerIndex ? alert("Correct") : alert("Try Again"))}>{question.Answer[3]}</button> 
          </div>
        ))}
      </div>
    );
  }
}

export default Question;