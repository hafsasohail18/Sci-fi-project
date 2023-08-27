import React from 'react';
import Quizes from '../Quiz/Quizes'
import quizData from '../Quiz/QuizData.json'
import '../Quiz/QuizPage.css'

function QuizPage() {
  return (
    <div className="Quiz">
      <h1 className='heading-style3'>Sci-fi Quiz</h1>
      <Quizes questions={quizData} />
    </div>
  );
}

export default QuizPage;
