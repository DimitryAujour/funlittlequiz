import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './Question.module.css';

interface QuestionProps {
  question: {
    question: string;
    options: string[];
    icon: IconDefinition;
  };
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div className={styles['questionnaire-container']}>
      <h2 className='h2'>{question.question}</h2>
      <div className={styles['icon-container']}>
        <FontAwesomeIcon icon={question.icon} className={styles['question-icon']} />
      </div>
      <ul className={styles['options-container']}>
        {question.options.map((option, index) => (
          <li className='li' key={index}>
            <button 
              className={styles['option-button']}
              onClick={() => onAnswer(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;