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

function Question(props) {
  function handleClick() {
    console.log('this is:', this);
  }

  return (
    <div className="Question">
      <h3>{ props.data.question }</h3>
      <div className="row">
        { props.data.answers.map(answer =>
          <button onClick={handleClick}>{ answer }</button>
        )}
      </div>
    </div>
  );
}

export default Yams;
