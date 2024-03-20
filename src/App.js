import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App padding-small">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<Home />} />
            <Route path="quiz" key="quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
