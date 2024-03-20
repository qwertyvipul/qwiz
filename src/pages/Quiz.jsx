import React, { useState, useEffect, useRef } from "react";
import Question from "../components/Question";
import { numQuestions } from "../data/questions";
import Result from "../components/Result";

export default function Quiz() {
  const timerRef = useRef(null);
  const [answers, setAnswers] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [seconds, setSeconds] = useState(0);

  if (questionNumber === numQuestions) {
    clearInterval(timerRef.current);
  }

  const handleReset = () => {
    setAnswers([]);
    setQuestionNumber(0);
    setSeconds(0);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (questionNumber < numQuestions) {
        setSeconds((prev) => prev + 1);
      }
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeString = mins + ":" + (secs < 10 ? "0" : "") + secs;

  return (
    <>
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
    </>
  );
}
