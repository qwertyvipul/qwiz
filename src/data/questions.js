export const QUESTION_TYPES = {
  SINGLE_CORRECT: 0,
  MULTI_CORRECT: 1,
};

const questions = [
  // {
  //   type: QUESTION_TYPES.MULTI_CORRECT,
  //   question: "Which of these are inline tags?",
  //   options: ["br", "span", "div", "p"],
  // },
  {
    type: QUESTION_TYPES.SINGLE_CORRECT,
    question: "What does HTML stand for?",
    options: [
      "Hyperlinks Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Home Text Markup Language",
    ],
    correctOption: 2,
  },
  // {
  //   type: QUESTION_TYPES.SINGLE_CORRECT,
  //   question: "Who is making the Web standards?",
  //   options: [
  //     "Microsoft",
  //     "Google",
  //     "Mozilla",
  //     "The World Wide Web Consortium",
  //   ],
  //   correctOption: 3,
  // },
];

export default questions;
export const numQuestions = questions.length;
