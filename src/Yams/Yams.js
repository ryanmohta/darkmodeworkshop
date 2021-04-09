import React from 'react';
import './Yams.css';
import { yamQuestionData } from './YamQuestionData';

class Yams extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedAnswers: new Array(10).fill(undefined) };
  }

  render() {
    return (
      <div className="Yams">
        <div className="header">
          <h2>How well do you know about</h2>
          <h1>YAMS?</h1>
          <h2>By Ryam</h2>
        </div>
        <div className="questions">
          { yamQuestionData.map(question => <Question data={question} />) }
        </div>
      </div>
    );
  }
}

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: undefined };
  }

  handleClick(index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    return (
      <div className="Question">
        <h3>{ this.props.data.question }</h3>
        <div className="row">
          { this.props.data.answers.map((answer, index) =>
            <button
              key={index}
              className={ this.state.selectedIndex === index ? 'selected' : '' }
              onClick={() => this.handleClick(index)}
            >{ answer }</button>
          )}
        </div>
      </div>
    );
  }
}

export default Yams;
