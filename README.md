# Trivia App Starter Code!

## Project Description

In this unit, coders will work in groups to build a project using HTML, CSS, React. Their task is to build out the front-end for a Kahoot style question game that displays a question and the possible answers, allows a user to choose answer and determine whether they are right or wrong.

====

### Day 1.0: React Components and props

Goal: Render a question from sample_data.json on the screen.

- [ ] In App.jsx in the App component, add a variable to set the current question number to 0.
- [ ] In App.jsx, create a Question component.
- [ ] Add props to `<Question />` with the text "Question goes here".
- [ ] Render `<Question />` inside of App.
- [ ] Replace "Question goes here" with the `question.text` field found in data for the first question.
- [ ] BONUS: Add styling to your app.

>![Day 1.0 goal](https://i.imgur.com/eTZAXGk.png)

### Day 1.5: React Components

Goal: Render a "Next Question" button on the screen.

- [ ] In App.jsx, create a NextQuestion component.
- [ ] Write the JSX to display a button for the user to click for the next question. (It will not work yet.)
- [ ] Render `<NextQuestion />` inside of App.

>![Day 1.5 goal](https://i.imgur.com/o4MzPjL.png)

### Day 2.0: Nested components

Goal: Render the answer choices from sample_data.json on the screen.

- [ ] In App.jsx, create an Answer component.
- [ ] Add props to `<Answer />` with the text "Answer goes here".
- [ ] Render `<Answer />` inside of `<Question />`.
  - [ ] Pass props for the answer choices into `<Question />`.
  - [ ] Use those props to render the Answer components inside `<Question />` to display the answer choices.
- [ ] Refactor to use map to map over all answer choices.

>![Day 2.0 goal](https://i.imgur.com/VpA8eRc.png)

### Day 2.5: State

Goal: Render a button on the screen that reveals the correct answer when clicked.

- [ ] Add state to `<App />` using the `useState` React hook to keep track of if the question is answered.
- [ ] Add a button to the App component that updates state to `isAnswered` when clicked.
- [ ] Set the state of `isAnswered` to display the correct answer choice.

>![Day 2.5 goal - unanswered](https://i.imgur.com/JI6GroE.png)
>![Day 2.5 goal - answered](https://i.imgur.com/rufYX84.png)

### Day 3.0: Event handlers

Goal: Add functionality to your "Next Question" button so that it renders the next question when clicked.

- [ ] Add state to `<App />` using the `useState` React hook to keep track of the current question number.
  - [ ] Replace the current question number variable that you wrote in Day 1.
- [ ] Add a prop to `<NextQuestion />` that updates state to the next question number.
- [ ] Pass your prop to the button element inside `<NextQuestion />` so that when it is clicked, the next question is displayed on the screen.
- [ ] Check that every part of your question and answer updates to reflect the current question number.
- [ ] Reset the state of `isAnswered` when the Next Question button is clicked.
- [ ] BONUS: Add a [ternary operator](http://mzl.la/3nCo8bq) to hide `<NextQuestion />` when there are no more next questions.

>![Day 3.0 goal](https://i.imgur.com/fetraPF.png)
>![Day 3.0 with bonus](https://i.imgur.com/GruM8g2.png)


### Day 3.5: Event handlers

Goal: Add functionality so that when the user clicks on an answer choice, the correct answer appears.

- [ ] Inside the map function for the Answer components, add an event handler.
- [ ] Inside `<App />` (below state and above return), write a conditional that checks if the answer clicked is the correct answer.
  - [ ] Display text on the screen telling the user if their answer choice was correct.
  - [ ] Display text on the screen telling the user what the correct answer was.
  - [ ] HINT: To do this, you should create a variable and display that variable inside your return statement.
  - [ ] BONUS: Use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead of string concatenation.

>![Day 3.5 correct](https://i.imgur.com/HC7M6LH.png)
>![Day 3.5 wrong](https://i.imgur.com/DWQu3bb.png)

### Extensions!

- [ ] Make a timer that resets the game when the timer runs out.
- [ ] Make a counter that keeps track of how many times you've guessed the correct answer.
- [ ] Change the color of the answer buttons when the user guesses. For example turn the button with the correct answer to green.
- [ ] Make it a two player game.
- [ ] Anything else you want!
