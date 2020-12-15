# Trivia App Starter Code!

## Project Description

In this unit, coders will work in groups to build a project using HTML, CSS, React. Their task is to build out the front-end for a Kahoot style question game that displays a question and the possible answers, allows a user to choose answer and determine whether they are right or wrong.

====

### Day 1.0: React Components and props

Goal: Render a question from sample_data.json on the screen.

- [ ] In App.jsx in the App component, add a variable to set the current question number to 0.
- [ ] In App.jsx, create a Question component.
- [ ] Add props to <Question /> with the text "Question goes here".
- [ ] Render <Question /> inside of App.
- [ ] Replace "Question goes here" with the `question.text` field found in data for the first question.
- [ ] BONUS: Add styling to your app.

>![Day 1 goal](https://i.imgur.com/eTZAXGk.png)

### Day 1.5: React Components

Goal: Render a "Next Question" button on the screen.

- [ ] In App.jsx, create a NextQuestion component.
- [ ] Write the JSX to display a button for the user to click for the next question. (It will not work yet.)
- [ ] Render <NextQuestion /> inside of App.

### Day 2.0: Nested components

Goal: Render the answer choices from sample_data.json on the screen.

- [ ] In App.jsx, create an Answer component.
- [ ] Add props to <Answer /> with the text "Answer goes here".
- [ ] Render `<Answer />` inside of <Question />.
  - [ ] Pass props for the answer choices into <Question />.
  - [ ] Use those props to render the Answer components inside Question to display the answer choices.
- [ ] Refactor to use map to map over all answer choices.

>![Day 2.0 goal](https://i.imgur.com/Q191NRq.png)

### Day 2.5: State

Goal: Render a button on the screen that reveals the correct answer when clicked.

- [ ] Add state to the App component using the `useState` React hook to keep track of if the question is answered.
- [ ] Add a button to the App component that updates state to `isAnswered` when clicked.
- [ ] Set the state of `isAnswered` to display the correct answer choice.

>![Day 2.5 goal - unanswered](https://i.imgur.com/p4vpcws.png)
>![Day 2.5 goal - answered](https://i.imgur.com/KB4zJCO.png)

### Day 3.0: Event handlers

Goal: Add functionality to your "Next Question" button so that it renders the next question when clicked.

- [ ] Add state to the App component using the `useState` React hook to keep track of the current question number.
  - [ ] Replace the current question number variable that you wrote in Day 1.
- [ ] Add a prop to the NextQuestion component that updates state to the next question number.
- [ ] Pass your prop to the button element inside `<NextQuestion />` so that when it is clicked, the next question is displayed on the screen.
- [ ] Check that every part of your question and answer updates to reflect the current question number.
- [ ] BONUS: Add a ternary operator to hide `<NextQuestion />` when there are no more next questions.


### Day 3.5: Event handlers

Goal: Add functionality so that when the user clicks on an answer choice, the correct answer appears.

- Add an event handler to the Answer components inside the map.
- Below state (above return) write a condtional that checks if the answer clicked is the correct answer and displays text.
- Create a variable and display in the return.

### Extensions!

- [ ] Make a timer that resets the game when the timer runs out.
- [ ] Make a counter that keeps track of how many times you've guessed the correct answer.
- [ ] Change the color of the answer buttons when the user guesses. For example turn the button with the correct answer to green.
- [ ] Make it a two player game.
- [ ] Anything else you want!
