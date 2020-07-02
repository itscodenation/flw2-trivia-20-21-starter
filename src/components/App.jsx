import React, { Component, useState } from "react";
import "../css/App.css";
// import components here

/* 
Lesson 1
- create a react component that accepts props
  - write JSX
  - render a nested component

Lesson 2
- pass a function as a prop
- register a click event 

Lesson 3
- use and update state
- implement useEffect
*/

/**
 * DON'T
 * - DESTRUCTURE IN THE FUNCTION SIGNATURE
 * - TEACH SHORT CIRCUITS, USE TERNARY EVERY TIME
 * DO
 * EXPLAIN THE PARTS OF A FUNCTION
 * - SIGNATURE
 * - BODY
 * - ARROW (FOR ARROW FUNCTIONS)
 */

/**
 * question
 * answer
 * app
 */

const example = {
  questions: [
    {
      question: {
        choices: ["48", "13", "52", "50"],
        correct_choice_index: 3,
        question_text: "How many states are in the United States?",
        user_id: "ZbCvDadaM0SD9YjAXrHMEDLVGoj2"
      }
    },
    {
      question: {
        choices: ["5", "17", "23", "42"],
        correct_choice_index: 0,
        question_text: "How many fingers are most commonly on a human hand?",
        user_id: "ZbCvDadaM0SD9YjAXrHMEDLVGoj2"
      }
    }
  ]
};

// Answers.js
function AnswerList(props) {
  return (
    <div className="all-answers">
      {props.answers.map((ans, index) => (
        <AnswerButton
          content={ans}
          answerClicked={() => props.answerClicked(index)}
          key={`st${ans}wers`}
        />
      ))}
    </div>
  );
}

// Answer.js
function AnswerButton(props) {
  return <button>{props.content}</button>;
}

// Question.js
function Question(props) {
  return <div className={"question"} />;
}

function NextQuestion(props) {
  return <button onClick={() => console.log("buttonClicked")} />;
}

function App() {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    example.question
  );
  const nextQuestionContent = selectedAnswerIndex ? (
    <NextQuestion />
  ) : (
    "Select an answer"
  );

  return (
    <div className="app">
      <Question question_text={example.questions[0].question.question_text} />
      <AnswerList
        answers={example.questions[0].question.choices}
        answerClicked={setSelectedAnswerIndex}
      />
      {nextQuestionContent}
    </div>
  );
}

export default App;
