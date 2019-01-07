# Kahoot App!

## Project Description

For this project we will be building a kahoot app. This project will use firebase to fetch questions and react to diplay questions and answers. 

====
### Day 1 Setup and Intro to React
Goal: Set up your project and view the live running app.

- [x] Go to the repository at https://github.com/ScriptEdcurriculum/kahoot
- [ ] Fork this repository to your github account and clone to a new workspace
- [ ] Add, commit, and push your changes
- [ ] to set up your app, in your terminal type `npm install`
- [ ] to run your app, in your terminal type `npm start` this runs the app in the development mode. Then open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- [ ] Use your planning sheet to create a your component layout.

====
### Day 2 Creating Components and Component Layout
Goal: Set up your your components

- [ ] In your App.jsx file import the Question Component
- [ ] Inside the render function call your Question component
- [ ] Using the Question.jsx as a template create three more components called AnswerButton.jsx, QuestionText.jsx and ResetButton.jsx
- [ ] In your Question.jsx file import your QuestionText, AnswerButton and ResetButton. In the spaces provided call each of the components. (You should have 4 AnswerButtons)
- [ ] The QuestionText should render a div with the text of any question of your choosing
- [ ] The AnswerButton should should render a div with the text of any question of your choosing
- [ ] The ResetButton should should render a div with the text "Reset"
- [ ] Style these in any way you choose.

### Day 3 Passing Down Props to components
- [ ] Now that we have this, we can pass down the questions to other components using props. In your App.jsx let add a prop to the Question component and pass it the currentQuestion from state.
```
    < Question
        questionText={"What is the answer to the Ultimate Question of Life"}
    />
```

- [ ] Now we can access this information in the Question component using props. Then we can pass down currentQuestion's question to the QuestionText component. Open Question.jsx and add the following.
```
    < QuestionText
        questionText={this.props.questionText}
    />
```
- [ ] Finally in the QuestionText component lets display that question. 

```
    <div className="questionText">
      {this.props.questionText}
    </div>
```
- [ ] Now lets do the same process to pass down your choices to each AnswerButton and diplay the answer choices.

- [ ] Use your remaining time to style your project

### Day 4 Updating State
Now that we have props that we can pass down we need a way to store/ keep track of props if we change them. Thats where we can use state.

- [ ] In your App.jsx file lets add a constructor method directly inside your App component

```
class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      
    }
  }
```

- [ ] Since we want to keep track of the question each time the page loads lets add a property to the state to keep track of the state. We want to keep track of all the questions and the current displayed function. Complete the rest of the state to match the structure of the question.

```
    this.state= {
      questions: {},
      currentQuestion: {
          question_text: "Question",
          choices: [],
          correct_choice_index: null,
      }  
    }
```

- [ ] Now we can access the question_text from state and pass it down to each subsequent component. Notice your question text change. 

```
    <Question 
        questionText={this.state.currentQuestion.question_text}
    />
```

- [ ] Complete for each of your answer choices. 

- [ ] Last we want to grab a new question when the page loads we need to write a firebase function in the the constuctor.

```
   constructor(props) {
    super(props); 

    firebaseDatabase.ref('/questions').on('value', (snapshot)=> {
      console.log(snapshot.val())
    });
```
- [ ] use this.setState to change the state.

```
    firebaseDatabase.ref('/questions').on('value', (snapshot)=> {
        lets questions = snaphot.val();
        let randomQuestion = getRandomQuestion(questions)
        this.setState({
            questions: questions,
            currentQuestion: randomQuestion,
        })
    });
```
- [ ] Reload the page to see your conent change.


### Day 5 Reacting to user click
- [ ] Create a new function that when you click on an AnswerButton component changes the questionText to display the correct answer.
 ```
  _onAnswerButtonClicked(){
    this.setState({
      shouldDisplayAnswer: true,
    })
  }
  ```

- [ ] Now we need to pass this function down through props to the button component. We do this using and arrow function displayed below. 
  ```
  <Question 
    ...
    answerButtonClicked={()=>this._onAnswerButtonClicked()}
  />
  ```

- [ ] In Question.jsx keep passing it down through props
  ```
    <AnswerButton 
        answerButtonClicked={this.props.answerButtonClicked}
    />
  ```
- [ ] In AnswerButton.jsx we can add it to the onClick function
  ```
    return (
      <div className="answer-button"
        onClick={this.props.onAnswerButtonClicked()}
      >
        {answerText}
      </div>
    );
  ```
- [ ] Lastly we can use the property shouldShowCorrectAnswer to tell our QuestionText what to display. 
  ```
  <Question 
    ...
    shouldShowCorrectAnswer={shouldShowCorrectAnswer}
    correctAnswer={question.choices[question.correct_choice_index]}
  />
  ```

- [ ] Lastly we can use the property shouldDisplayAnswer to tell our QuestionText what to display. 
  ```
  let display;
  if(shouldShowCorrectAnswer){
    display = "The correct answer is " + correctAnswer;
  } else {
    display = questionText;
  }

  return (
    <div className="questionStem">
      {display}
    </div>
  );
  ```

### Day 6 More Functions and Conditional Rendering

- [ ] In your App.jsx create a method function call  _onResetButtonClicked(). When this function is called it will set the current question to a new question.
 ```
  _onResetButtonClicked(){
    let randomQuestion = getRandomQuestion(this.state.questions)
    this.setState({
      currentQuestion: randomQuestion,
      shouldShowCorrectAnswer: false,
    })
  }
  ```
- [ ] Now we need to pass this function down through props to the button component. We do this using and arrow function displayed below. 
  ```
  <Question 
    ...
    resetButtonClicked={()=>this.onResetButtonClicked()}
  />
  ```
- [ ] In Question.jsx keep passing it down through props
  ```
    <ResetButton 
          resetButtonClicked={this.props.resetButtonClicked}
    />
  ```
- [ ] In AnswerButton.jsx we can add it to the onClick function
  ```
    return (
      <div className="reset-button"
        onClick={this.props.resetButtonClicked}
      >
        Reset
      </div>
    );
  ```

### Day 7 Work day and making your site live
- [] Make your site live on gh-pages
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
- [ ] Use the remaining time to style yourp


### Day 8 Presentation Preperation Day
- 