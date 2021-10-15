import React from 'react';
import './App.css';
import yams from './yams.jpg';
import questions from './questions';

// our state
// selectedAnswers: array of 10 elements that each have the selected index
// submitted: boolean

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswers: new Array(10).fill(undefined),
      submitted: false
    };
  }

  onQuestionSelected = (questionIndex, selectedIndex) => {
    this.setState(state => {
      const selectedAnswers = state.selectedAnswers.map((item, index) => {
        if (index == questionIndex) {
          return selectedIndex;
        }
        else {
          return item;
        }
      });
      return { selectedAnswers: selectedAnswers };
    });
  }

  submit = () => {
    this.setState({ submitted: true });
  }

  calculateScore = () => {
    let score = 0;
    for (var i = 0; i < this.state.selectedAnswers.length; i++) {
      if (this.state.selectedAnswers[i] == questions[i].correctAnswerIndex) {
        score++;
      }
    }
    return score;
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>How well do you know about</h2>
          <h1>YAMS?</h1>
          <h2>By Ryam</h2>
        </div>
        <img className="yam-image" src={yams} alt='An image of yams by ryam'/>
        <div className="questions">
          { questions.map((question, index) =>
              <Question
                key={ index }
                questionIndex={ index }
                question={ question.question }
                answers={ question.answers }
                correctAnswerIndex={ question.correctAnswerIndex }
                onQuestionSelected={ this.onQuestionSelected }
                submitted={ this.state.submitted }
              />
          )}
        </div>
        <div className="results">
          <button onClick={this.submit}>{this.state.submitted ? `${this.calculateScore()}/10 correct!` : "How'd I do?"}</button>
        </div>
      </div>
    );
  }
}

// our props
// question: string
// answers: [string, string, string, string]

// our state
// selectedIndex: integer from 0 to 3 OR undefined

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: undefined };
  }

  getButtonClass(index) {
    if (this.props.submitted) {
      if (this.props.correctAnswerIndex == index) {
        return 'correct';
      }
      else if (this.state.selectedIndex == index) {
        return 'incorrect';
      }
    }
    else if (this.state.selectedIndex == index) {
      return 'selected';
    }
    return '';
  }

  handleClick(index) {
    this.setState({ selectedIndex: index });
    this.props.onQuestionSelected(this.props.questionIndex, index);
  }

  render() {
    return (
      <div className="Question">
        <h3>{ this.props.question }</h3>
        <div className="row">
          { this.props.answers.map((answer, index) =>
            <button
              key={ index }
              className={this.getButtonClass(index)}
              onClick={ () => this.handleClick(index) }
            >{ answer }</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
