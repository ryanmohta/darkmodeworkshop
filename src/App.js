import React from 'react';
import './App.css';
import yams from './yams.jpg';
import { yamQuestionData } from './YamQuestionData';

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
      const selectedAnswers = state.selectedAnswers.map((item, j) => {
        if (j === questionIndex) {
          return selectedIndex;
        }
        else {
          return item;
        }
      });

      return {
        selectedAnswers
      };
    });
  };

  submit = () => {
    this.setState({submitted: true});
  }

  calculateScore = () => {
    let score = 0;
    for (var i = 0; i < this.state.selectedAnswers.length; i++) {
      if (this.state.selectedAnswers[i] === yamQuestionData[i].correctAnswerIndex) {
        score++;
      }
    }
    return score;
  }

  toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      // The user has manually selected dark mode.
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    else if (document.documentElement.classList.contains("light")) {
      // The user has manually selected light mode.
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
    else {
      // The user hasn't manually configured light or dark mode
      // yet, so we have to check what theme the operating system
      // is set to.
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("light");
      }
      else {
        document.documentElement.classList.add("dark");
      }
    }
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>How well do you know about</h2>
          <h1>YAMS?</h1>
          <h2>By Ryam</h2>
        </div>
        {
          // Clicking on the image toggles between dark and light mode.
          // There are other ways to accomplish this too such as with an
          // on/off toggle switch or a menu item, but hey who doesn't like
          // an Easter egg?
        }
        <img onClick={this.toggleDarkMode} className="yam-image" src={yams} alt="lots of yams mmmm"/>

        <div className="questions">
          { yamQuestionData.map((question, index) =>
            <Question
              key={index}
              questionIndex={index}
              data={question}
              onQuestionSelected={this.onQuestionSelected}
              submitted={this.state.submitted} />
            )}
        </div>
        <div className="results">
          <button onClick={this.submit}>{this.state.submitted ? `${this.calculateScore()}/10 correct!` : "How'd I do?"}</button>
        </div>
      </div>
    );
  }
}

function getClassName(props, state, index) {
  if (props.submitted) {
    if (props.data.correctAnswerIndex === index) {
      return 'correct';
    }
    else if (state.selectedIndex === index) {
      return 'incorrect';
    }
  }
  else {
    if (state.selectedIndex === index) {
      return 'selected';
    }
  }
  return '';
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: undefined };
  }

  handleClick(index) {
    this.setState({ selectedIndex: index });
    this.props.onQuestionSelected(this.props.questionIndex, index);
  }

  render() {
    return (
      <div className="Question">
        <h3>{ this.props.data.question }</h3>
        <div className="row">
          { this.props.data.answers.map((answer, index) =>
            <button
              key={index}
              className={getClassName(this.props, this.state, index)}
              onClick={ () => this.handleClick(index) }
            >{ answer }</button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
