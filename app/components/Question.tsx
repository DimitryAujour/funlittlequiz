import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface QuestionProps {
  question: {
    question: string;
    options: string[];
    icon: IconDefinition;
  };
  onAnswer: (answer: string) => void;
}

const QuestionnaireContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(243, 229, 245, 0.9);
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const QuestionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #4a148c;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const IconContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  svg {
    font-size: 4rem;
    color: #7b1fa2;

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }
`;

const OptionsContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  background-color: #9c27b0;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #7b1fa2;
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }
`;

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <QuestionnaireContainer>
      <QuestionTitle>{question.question}</QuestionTitle>
      <IconContainer>
        <FontAwesomeIcon icon={question.icon} />
      </IconContainer>
      <OptionsContainer>
        {question.options.map((option, index) => (
          <li key={index}>
            <OptionButton onClick={() => onAnswer(option)}>
              {option}
            </OptionButton>
          </li>
        ))}
      </OptionsContainer>
    </QuestionnaireContainer>
  );
};

export default Question;