import React, { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

function App() {
  const [takeQuiz, setTakeQuiz] = useState(false);
  return (
    <Container>
      {takeQuiz ? <Quiz /> : <Home onQuizStart={() => setTakeQuiz(true)} />}
    </Container>
  );
}

export default App;
