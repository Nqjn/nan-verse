import React from 'react';
import Quiz from './Quiz';
import questions from './questions';
import './Prijimacky.css';

function Prijimacky() {
  return (
    <div className="container">
      <h1>Rozšířený matematický kvíz</h1>
      <Quiz questions={questions} />
    </div>
  );
}

export default Prijimacky;