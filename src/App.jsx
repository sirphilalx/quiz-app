import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuestionDashboard from "./pages/QuestionDashboard";
import QuestionDetail from "./pages/QuestionDetail";
import Projector from "./pages/Projector";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/question" element={<QuestionDashboard />} />
          <Route path="/api/question/detail/:id" element={<QuestionDetail />} />
          {/* <Route path="/api/projector" element={<Projector />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
