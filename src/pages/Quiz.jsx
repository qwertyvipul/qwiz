import React, { useState, useEffect, useRef } from "react";
import Question from "../components/Question";
import { numQuestions } from "../data/questions";
import Result from "../components/Result";

export default function Quiz() {
  const timer = useRef(null);
  const [answers, setAnswers] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [seconds, setSeconds] = useState(0);

  if (questionNumber === numQuestions) {
    clearInterval(timer.current);
  }

  const handleReset = () => {
    setAnswers([]);
    setQuestionNumber(0);
  };

  useEffect(() => {
    timer.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeString = mins + ":" + (secs < 10 ? "0" : "") + secs;

  return (
    <div>
      {questionNumber < numQuestions ? (
        <Question
          key={questionNumber}
          questionNumber={questionNumber}
          attempt={questionNumber + 1 === answers.length}
          onSubmit={(selected) => setAnswers([...answers, selected])}
          onNext={() => setQuestionNumber(questionNumber + 1)}
          timeString={timeString}
        />
      ) : (
        <Result
          answers={answers}
          onReset={handleReset}
          timeString={timeString}
        />
      )}
    </div>
  );
}
