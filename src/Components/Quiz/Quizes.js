import React, { useState } from 'react';
import Question from '../Quiz/Question';
import '../Quiz/QuizPage.css'

// ... (other imports)

const Quizes = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false); // Track whether an answer was selected

  const handleAnswerSelect = (selectedOption) => {
    if (!answered) {
      setAnswered(true);

      const currentQuestion = questions[currentQuestionIndex];
      if (selectedOption === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }

      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          setCurrentQuestionIndex(-1); // Quiz completed
        }
        setAnswered(false); // Reset answered status for the next question
      }, 1000);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      {currentQuestionIndex !== -1 ? (
        <Question
          question={currentQuestion.question}
          options={currentQuestion.options}
          onSelect={handleAnswerSelect}
          answered={answered ? currentQuestion.correctAnswer : null}
        />
      ) : (
        <div className="result">
          <h2>Quiz Completed</h2>
          <p>Your Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Quizes;
