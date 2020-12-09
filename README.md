# Trivia App Starter Code!

## Project Description

In this unit, coders will work in groups to build a project using HTML, CSS, React. Their task is to build out the front-end for a Kahoot style question game that displays a question and the possible answers, allows a user to choose answer and determine whether they are right or wrong.

====

### Day 1: React Components and props

Goal: Render the question from sample_data.json on the screen.

- [ ] In App.jsx, create a Question component.
- [ ] Add props to <Question /> with the text "Question goes here".
- [ ] Render <Question /> inside of App.
- [ ] Replace "Question goes here" with the `question.text` field found in data.
- [ ] BONUS: Add styling to your app.

### Day 2.0: Nested components

Goal: Render the answer choices from sample_data.json on the screen.

- [ ] In App.jsx, create an Answer component.
- [ ] Add props to <Answer /> with the text "Answer goes here".
- [ ] Render <Answer /> inside of App.
- [ ] Refactor to use map to map over all answer choices.

### Day 2.5: State

Goal: Render a button on the screen that reveals the correct answer when clicked.

- [ ] Add state to the App component using the `useState` React hook to keep track of if the question is answered.
- [ ] Add a button to the App component that updates state to `isAnswered` when clicked.
- [ ] Set the state of `isAnswered` to display the correct answer choice.

### Day 3.0: Event handlers

Goal: Add a "Next Question" button that renders the next question when clicked.


### Day 3.5: Event handlers

Goal: Add functionality so that when the user clicks on an answer choice, the correct answer appears.


### Extensions!

- [ ] Make a timer that resets the game when the timer runs out.
- [ ] Make a counter that keeps track of how many times you've guessed the correct answer.
- [ ] Change the color of the answer buttons when the user guesses. For example turn the button with the correct answer to green.
- [ ] Make it a two player game.
- [ ] Anything else you want!
