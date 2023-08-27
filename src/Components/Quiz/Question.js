import React, { useState } from 'react';
import '../Quiz/QuizPage.css';

const Question = ({ question, options, onSelect, answered, currentSelectedOption }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    if (!answered) {
      setSelectedOption(option);
      onSelect(option);
    }
  };

  return (
    <div className="question">
      <h2>{question}</h2>
      <ul className='question-list'>
        {options.map((option, index) => {
          const isCorrect = option === currentSelectedOption;
          const isWrong = option === selectedOption && option !== currentSelectedOption;

          const optionStyles = {
            backgroundColor: isCorrect ? '#66ff66' : isWrong ? '#fd7777' : '',
            cursor: answered ? 'not-allowed' : 'pointer'
          };

          return (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              style={optionStyles}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;

