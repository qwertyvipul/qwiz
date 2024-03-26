import React, { useState, useCallback, useRef } from "react";
import { getTimeString } from "../utils/time";
import QuizProgress from "./QuizProgress";
import QuizEnd from "./QuizEnd";

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const timeRef = useRef(null);
  const [inProgress, setInProgress] = useState(true);

  const handleReset = useCallback(() => {
    setAnswers([]);
    timeRef.current = null;
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
            onTick={(seconds) => {
              timeRef.current = seconds;
            }}
          />
        );
      }
      case false: {
        return (
          <QuizEnd
            answers={answers}
            onReset={handleReset}
            timeString={getTimeString(timeRef.current)}
          />
        );
      }
      default: {
      }
    }
  })();

  return <>{element}</>;
}
