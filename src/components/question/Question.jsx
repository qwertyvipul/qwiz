import React from "react";

import questions from "../../data/questions";
import SingleCorrectQuestion from "./SingleCorrectQuestion";
import { QUESTION_TYPES } from "../../data/questions";
import MultiCorrectQuestion from "./MultiCorrectQuestion";

export default function Question({
  questionNumber,
  attempt,
  onAnswer,
  answer,
}) {
  const question = questions[questionNumber];

  return (
    <>
      <div style={{ textAlign: "left" }}>
        {(() => {
          switch (question.type) {
            case QUESTION_TYPES.SINGLE_CORRECT: {
              return (
                <SingleCorrectQuestion
                  question={question}
                  answer={answer}
                  attempt={attempt}
                  onAnswer={onAnswer}
                />
              );
            }
            case QUESTION_TYPES.MULTI_CORRECT: {
              return (
                <MultiCorrectQuestion
                  question={question}
                  answer={answer}
                  attempt={attempt}
                  onAnswer={onAnswer}
                />
              );
            }
            default: {
            }
          }
        })()}
      </div>
    </>
  );
}
