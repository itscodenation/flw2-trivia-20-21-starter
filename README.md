# Trivia App Starter Code!

## Project Description

In this unit, coders will work in groups to build a project using HTML, CSS, React. Their task is to build out the front-end for a Kahoot style question game that displays a question and the possible answers, allows a user to choose answer and determine whether they are right or wrong.

====

## Day 1: React Components and props

### Goal 1: Render a question from sample_data.json on the screen.

- [x] In App.jsx, create a Question component.
- [x] Render an instance of `<Question />` inside of `<App />`.
- [x] Add props to `<Question />` with the text "Question goes here".
- [x] In `<App />`, add a variable to set the current question number to 0.
- [x] Replace "Question goes here" with the `question.text` field found in data for the first question.
  - [ ] HINT: Use the question number variable you just wrote.
- [ ] BONUS: Add styling to your app.

> ![Day 1.0 goal](https://i.imgur.com/eTZAXGk.png)

### Goal 2: Render a "Next Question" button on the screen.

- [ ] In App.jsx, create a NextQuestion component.
- [ ] Write the JSX to display a button for the user to click for the next question. (It will not work yet.)
- [ ] Render an instance of `<NextQuestion />` inside of `<App />`.

> ![Day 1.5 goal](https://i.imgur.com/o4MzPjL.png)

## Day 2: Nested components and state

### Goal 1: Render the answer choices from sample_data.json on the screen.

- [ ] In App.jsx, create an Answer component.
- [ ] Render an instance of `<Answer />` inside of `<Question />`.
- [ ] Add props to `<Answer />` with the text "Answer goes here".
  - [ ] Pass props for the answer choices into `<Question />`.
  - [ ] Use those props to render the Answer components inside `<Question />` to display the answer choices.
- [ ] Refactor to use map to map over all answer choices.

> ![Day 2.0 goal](https://i.imgur.com/VpA8eRc.png)

### Goal 2: Render a button on the screen that reveals the correct answer when clicked.

- [ ] Using `useState` in `<App />`, create a boolean state variable called `answerDisplayed` to keep track of whether the correct answer is shown.
- [ ] Add a button to the App component that will update the state to display the correct answer when it is clicked.
- [ ] Create an onClick function that sets the state to display the correct answer choice when your button is clicked.
  - [ ] HINT: Access the correct answer choice using `sample_data.json`.

> ![Day 2.5 goal - unanswered](https://i.imgur.com/JI6GroE.png) >![Day 2.5 goal - answered](https://i.imgur.com/rufYX84.png)

## Day 3: Event handlers

### Goal 1: Add functionality to your "Next Question" button so that it renders the next question when clicked.

- [ ] Add state to `<App />` using the `useState` React hook to keep track of the current question number.
  - [ ] Replace the current question number variable that you wrote in Day 1.
- [ ] Create a function that updates the state to the next question number.
- [ ] Make a prop on `<NextQuestion />` to pass the prop down to the button element to call that function when the button is clicked.
- [ ] Check that every part of your question and answer updates to reflect the current question number.
- [ ] Reset the state of `answerDisplayed` when the Next Question button is clicked so the correct answer stops being displayed.
- [ ] BONUS: Add [conditional rendering](https://reactjs.org/docs/conditional-rendering.html) to hide `<NextQuestion />` when there are no more next questions.

> ![Day 3.0 goal](https://i.imgur.com/fetraPF.png) >![Day 3.0 with bonus](https://i.imgur.com/GruM8g2.png)

### Goal 2: Add functionality so that when the user clicks on an answer choice, the correct answer appears.

- [ ] Using `useState` in `<App />`, create a state variable to keep track of which answer choice the user clicks.
  - [ ] Inside the map function for the Answer components, add an event handler that updates the state to be the choice that the user clicks.
  - [ ] HINT: Use props to pass down the state from `<App />`.
  - [ ] HINT: Don't forget to pass your `onClick` down as a prop as well.
- [ ] Inside `<App />` (below state and above return), write a conditional that checks if the answer clicked is the correct answer.
  - [ ] Display text on the screen telling the user if their answer choice was correct.
  - [ ] Display text on the screen telling the user what the correct answer was.
  - [ ] HINT: To do this, you should create a variable and display that variable inside your return statement.
  - [ ] BONUS: Use [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) instead of string concatenation.

### Goal 3: Sort your Trivia app into separate files and import/export the components.

- [ ] Create a new `.js` file inside the components folder for each of your components.
- [ ] Move the code for your components into their new files.
- [ ] Add an export to each of your components.
- [ ] Import all of your components into the correct files.

> ![Day 3.5 correct](https://i.imgur.com/HC7M6LH.png) >![Day 3.5 wrong](https://i.imgur.com/DWQu3bb.png)

## Extensions!

- [ ] Make a timer that resets the game when the timer runs out.
- [ ] Make a counter that keeps track of how many times you've guessed the correct answer.
- [ ] Change the color of the answer buttons when the user guesses. For example turn the button with the correct answer to green.
- [ ] Make it a two player game.
- [ ] Anything else you want!
