import React, { useState } from "react";
import Question from "../components/Question";
import questions from "../data/questions";
import Result from "../components/Result";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);

  const handleReset = () => {
    setAnswers([]);
    setQuestionNumber(0);
  };

  return (
    <div>
      {questionNumber < questions.length ? (
        <Question
          key={questionNumber}
          questionNumber={questionNumber}
          attempt={questionNumber + 1 === answers.length}
          onSubmit={(selected) => setAnswers([...answers, selected])}
          onNext={() => setQuestionNumber(questionNumber + 1)}
        />
      ) : (
        <Result answers={answers} onReset={handleReset} />
      )}
    </div>
  );
}
