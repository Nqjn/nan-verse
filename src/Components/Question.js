import React from 'react';

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
      <button onClick={onCheck}>Zkontrolovat</button>
      {feedback && (
        <div className={`feedback ${feedback.isCorrect ? 'correct' : 'incorrect'}`}>
          {feedback.message}
        </div>
      )}
    </div>
  );
}

export default Question;