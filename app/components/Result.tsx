import React from 'react';

interface ResultProps {
  userAnswers: string[];
  questions: {
    correctanswer: string;
  }[];
}

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
    <div>
      <h2>Your Score: {score}/{questions.length}</h2>
      <p>{message}</p>
    </div>
  );
};

export default Result;