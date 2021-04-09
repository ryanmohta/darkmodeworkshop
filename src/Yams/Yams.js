import React from 'react';
import './Yams.css';
import { yamQuestionData } from './YamQuestionData';

function Yams() {
  return (
    <div className="Yams">
      <div className="header">
        <h2>How well do you know about</h2>
        <h1>YAMS?</h1>
        <h2>By Ryam</h2>
      </div>
      <Question data={yamQuestionData[0]} />
    </div>
  );
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
