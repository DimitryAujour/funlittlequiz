import React from 'react';
import styled from 'styled-components';

interface ResultProps {
  userAnswers: string[];
  questions: {
    correctanswer: string;
  }[];
}

const ResultContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(243, 229, 245, 0.9);
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ScoreTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #4a148c;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #7b1fa2;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ScoreHighlight = styled.span`
  font-weight: bold;
  color: #9c27b0;
`;

const Result: React.FC<ResultProps> = ({ userAnswers, questions }) => {
  const score = userAnswers.filter((answer, index) => answer === questions[index].correctanswer).length;

  let message = "";
  if (score === questions.length) {
    message = "Wow! You know me perfectly!";
  } else if (score > questions.length / 2) {
    message = "You know me pretty well!";
  } else {
    message = "Hmm, you need to learn more about me!";
  }

  return (
    <ResultContainer>
      <ScoreTitle>Your Score: <ScoreHighlight>{score}</ScoreHighlight>/{questions.length}</ScoreTitle>
      <Message>{message}</Message>
    </ResultContainer>
  );
};

export default Result;