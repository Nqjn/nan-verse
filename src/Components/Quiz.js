import React, { useState } from 'react';
import Question from './Question';

function Quiz({ questions }) {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [feedback, setFeedback] = useState(Array(questions.length).fill(null));

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const checkAnswer = (index) => {
    const userAnswer = userAnswers[index].trim().toLowerCase();
    const correctAnswer = questions[index].answer.toLowerCase();
    const newFeedback = [...feedback];

    if (userAnswer === correctAnswer) {
      newFeedback[index] = { isCorrect: true, message: 'Správně!' };
    } else {
      newFeedback[index] = { 
        isCorrect: false, 
        message: `Nesprávně. Vysvětlení: ${questions[index].explanation}`
      };
    }

    setFeedback(newFeedback);
  };

  return (
    <div className="quiz">
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          index={index}
          userAnswer={userAnswers[index]}
          feedback={feedback[index]}
          onAnswerChange={(value) => handleAnswerChange(index, value)}
          onCheck={() => checkAnswer(index)}
        />
      ))}
    </div>
  );
}

export default Quiz;