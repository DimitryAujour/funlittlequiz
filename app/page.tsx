'use client'
import React, { useState } from 'react';
import Question from './components/Question';
import Result from './components/Result';
import { faBowlFood, faCar, faHome, faIceCream, faPlane, faKey, faCarSide, faLanguage } from '@fortawesome/free-solid-svg-icons';

const questions = [
  { question: "What is Maryam's favorite dish?", options: ["Biryani", "Samosas", "spaghetti", "Nihari"], correctanswer: "spaghetti", icon: faBowlFood },
  { question: "What is the nickname of the current car?", options: ["Bleuberry", "Ginette", "Diamond unbreakable", "Flash mcflurry"], correctanswer: "Bleuberry", icon: faCar },
  { question: "If she had to choose a color theme for her home, what would it be?", options: ["shades of black", "Hunter Green and Red", "Blue and Beige", "Forest Green and Light Gray"], correctanswer: "shades of black", icon: faHome },
  { question: "She really likes jelly", options: ["ohhh yes!", "not really..."], correctanswer: "not really...", icon: faIceCream },
  { question: "Her favorite kind of sweets?", options: ["Chocolate", "gummies", "ice cream", "cinnamon pie"], correctanswer: "Chocolate", icon: faIceCream },
  { question: "At the airport, she used to have a nickname. What was it?", options: ["Paki queen", "aircanada representative", "funnygal", "jumpergirl"], correctanswer: "jumpergirl", icon: faPlane },
  { question: "Oh, she just loves collecting these!", options: ["keychains", "bottlecaps", "plantseeds", "badges"], correctanswer: "keychains", icon: faKey },
  { question: "If she had the money, she would get one of these cars!", options: ["Acura Mdx", "Genesis g60", "Tesla model y", "Kia soul"], correctanswer: "Acura Mdx", icon: faCarSide },
  { question: "She knows one of these languages!", options: ["Russian", "High Valyrian", "German", "Korean"], correctanswer: "German", icon: faLanguage }
];

const QuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedAnswer: string) => {
    setUserAnswers([...userAnswers, selectedAnswer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <main className="quiz-container">
      {showResult ? (
        <Result userAnswers={userAnswers} questions={questions} />
      ) : (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
    </main>
  );
};

export default QuizPage;