import React, { useState, useEffect, useRef } from "react";
import { numQuestions } from "../data/questions";
import Result from "../components/Result";
import { getTimeString } from "../utils/time";
import QuizProgress from "../components/QuizProgress";

export const STATUS = {
  PROGRESS: 0,
  FINISHED: 1,
  REVIEW: 2,
};

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState(STATUS.PROGRESS);

  const handleReset = () => {
    setAnswers([]);
    setSeconds(0);
    setStatus(STATUS.PROGRESS);
  };

  const handleQuizEnd = () => {
    setStatus(STATUS.FINISHED);
  };

  const element = (() => {
    switch (status) {
      case STATUS.PROGRESS: {
        return (
          <QuizProgress
            answers={answers}
            onAnswer={(answer) => setAnswers([...answers, answer])}
            onQuizEnd={handleQuizEnd}
            onTick={(seconds) => setSeconds(seconds)}
          />
        );
      }
      case STATUS.FINISHED: {
        return (
          <Result
            answers={answers}
            onReset={handleReset}
            timeString={getTimeString(seconds)}
          />
        );
      }
    }
  })();

  return <>{element}</>;
}
