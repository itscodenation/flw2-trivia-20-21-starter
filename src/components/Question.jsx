import React, { Component } from 'react';

class Question extends Component {

  constructor(props) {
    super(props);

    this.handleChoiceClick = this.handleChoiceClick.bind(this);
    this.correctChoice = props.question.correct_choice_index;

    this.state = {
      hasAnswered: false,
      choiceColors: ['black', 'black', 'black', 'black'],
    }

  }

  handleChoiceClick(choice) {
    const _choiceColors = [...this.state.choiceColors];
    const newColors = _choiceColors.map((currentColor, index) => {
      if (index === this.correctChoice) {
        return 'green';
      } else if (
          index !== this.correctChoice
          && (choice !== this.correctChoice)
          && (choice === index)
      ) {
        return 'red';
      } else {
        return 'black';
      }
    });
    this.setState({
      choiceColors: newColors
    });
  }

  render() {
    const question = this.props.question;
    const choices = question.choices;
    const questionText = question.question_text;
    return (
      <div>
        <h3>{questionText}</h3>
        <Choice
          text={choices[0]}
          handleChoiceClick={() => { this.handleChoiceClick(0); }}
          customStyles={{color: this.state.choiceColors[0] }}
        />
        <Choice
          text={choices[1]}
          handleChoiceClick={() => { this.handleChoiceClick(1); }}
          customStyles={{color: this.state.choiceColors[1] }}
        />
        <Choice
          text={choices[2]}
          handleChoiceClick={() => { this.handleChoiceClick(2); }}
          customStyles={{color: this.state.choiceColors[2] }}
        />
        <Choice
          text={choices[3]}
          handleChoiceClick={() => { this.handleChoiceClick(3); }}
          customStyles={{color: this.state.choiceColors[3] }}
        />
      </div>
    );
  }
}

function Choice(props) {
  return (
    <p
      style={props.customStyles}
      onClick={props.handleChoiceClick}
    >
      {props.text}
  </p>
  )
}



export default Question;