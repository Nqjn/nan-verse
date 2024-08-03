import React from 'react';
import "./Button.css"

function Question({ question, index, userAnswer, feedback, onAnswerChange, onCheck }) {
  return (
    <div className="question">
      <p>{index + 1}. {question.question}</p>
      <input 
        type="text" 
        value={userAnswer}
        onChange={(e) => onAnswerChange(e.target.value)}
        placeholder="Vaše odpověď"
      />
      <button className= "btn" onClick={onCheck}>Zkontrolovat</button>
      {feedback && (
        <div className={`feedback ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>
          {feedback.message}
        </div>
      )}
    </div>
  );
}

export default Question;