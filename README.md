# Kahoot App!

## Project Description

For this project we will be building a kahoot app. This project will use firebase to fetch questions and react to diplay questions and answers. 

====
### Day 1 Setup and Intro to React
Goal: Set up your project and view the live running app.
 [x] Go to the repository at https://github.com/ScriptEdcurriculum/kahoot
 [] Fork this repository to your github account and clone to a new workspace
 [] Add, commit, and push your changes
 [] to set up your app, in your terminal type `npm install`
 [] to run your app, in your terminal type `npm start` this runs the app in the development mode. Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 [] Use your planning sheet to create a your component layout.

====
### Day 2 Creating Components and Component Layout
Goal: Set up your your components
[] In your App.jsx file import the Question Component
[] Inside the render function call your Question component
[] Using the Question.jsx as a template create three more components called AnswerButton.jsx, QuestionStem.jsx and ResetButton.jsx
[] In your Question.jsx file import your QuestionStem, AnswerButton and ResetButton. In the spaces provided call each of the components. (You should have 4 AnswerButtons)
[] The QuestionStem should render a div with the text of any question of your choosing
[] The AnswerButton should should render a div with the text of any question of your choosing
[] The ResetButton should should render a div with the text "Reset"
[] Style these in any way you choose.

### Day 3 Creating State and Passing Down Props to components
[] Find your  constructor in App.jsx it should look like this.
```
  constructor(props) {
    super(props);
    this.state = {

    };
  }
```
[] For now we are going to fill the state with mock question Data. (Later we will be fetching random questions from firebase)
```
    this.state = {
        currentQuestion : {
            question: "Why is the answer to the Ultimate Question of Life, the Universe, and Everything",
            choices: [
                "Bubbles",
                "Chocolate",
                "42",
                "Puppies",
            ],
            correct_choice: "1"
        }
    };
```
[] Now that we have this we can pass down the questions to other components using props. In your App.js let add a prop to the Question component and pass it the currentQuestion from state.
```
    < Question
        currentQuestion={this.state.currentQuestion}
    />
```

[] Now we can access this information in the Question component using props. Then we can pass down currentQuestion's question to the QuestionStem component. Open Question.jsx and add the following.
```
    < QuestionStem
        question={this.props.currentQuestion.question}
    />
```
[] Finally in the QuestionStem component lets display that question. 

```
    <div className="questionStem">
      {this.props.question}
    </div>
```
[] Now lets do the same process to pass down your choices to each AnswerButton and diplay the answer choices.

[] Use your remaining time to style your project

### Day 4 Reacting to use input.


### Day 5 Work Day


### Day 6 Reacting to User Input


### Day 7 
 [] Make your site live on gh-pages
    [] npm install gh-pages --save-dev
    [] open your package.json file and add both of these
    ```
        "homepage": "http://gitname.github.io/react-gh-pages"
    ```
    ```
        "scripts": {
            //...
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build"
        }
    ```
    [] npm run deploy


### Day 8 Work Day

