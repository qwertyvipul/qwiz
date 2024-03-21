import React, { useState, useEffect, useRef, useCallback } from "react";
import { numQuestions } from "../data/questions";
import Result from "../components/Result";
import { getTimeString } from "../utils/time";
import QuizProgress from "../components/QuizProgress";
import QuizEnd from "../components/QuizEnd";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const [seconds, setSeconds] = useState(0);
  const [inProgress, setInProgress] = useState(true);

  const handleReset = useCallback(() => {
    setAnswers([]);
    setSeconds(0);
    setInProgress(true);
  }, []);

  const handleQuizEnd = useCallback(() => {
    setInProgress(false);
  }, []);

  const element = (() => {
    switch (inProgress) {
      case true: {
        return (
          <QuizProgress
            answers={answers}
            addAnswer={(answer) => setAnswers([...answers, answer])}
            onQuizEnd={handleQuizEnd}
            onTick={(seconds) => setSeconds(seconds)}
          />
        );
      }
      case false: {
        return (
          <QuizEnd
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
