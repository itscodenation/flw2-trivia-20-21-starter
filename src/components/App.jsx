import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question';
import { buildFirebase, getRandomQuestion } from '../clients/firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null
    }
  }

  componentDidMount() {
    this.db = buildFirebase();

    this.db.ref('/questions').on('value', (snapshot)=> {
      this.questions = snapshot.val();
      let randomQuestion = this.getNewQuestion(this.questions);
      console.log(this.questions, randomQuestion);
      this.setState({
          question: randomQuestion
      })
    });

    this.getNewQuestion = this.getNewQuestion.bind(this);
  }

  getNewQuestion(questions) {
    return getRandomQuestion(questions);
  }

  render() {
    return (
      <div className="app">
        <h1>Trivia!</h1>
        { this.state.question &&
          this.state.question.question_text
        }
      </div>
    );
  }
}

export default App;