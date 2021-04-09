import './Yams.css';

function Yams() {
  return (
    <div className="Yams">
      <div className="header">
        <h2>How well do you know about</h2>
        <h1>YAMS?</h1>
        <h2>By Ryam</h2>
      </div>
      <Question />
    </div>
  );
}

function Question() {
  function handleClick() {
    console.log('this is:', this);
  }

  return (
    <div className="Question">
      <h3>1. Question question question?</h3>
      <div className="row">
        <button onClick={handleClick}>Button 1</button>
        <button onClick={handleClick}>Button 2</button>
        <button onClick={handleClick}>Button 3</button>
        <button onClick={handleClick}>Button 4</button>
      </div>
    </div>
  );
}

export default Yams;
