import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const QuestionDetail = () => {
  // useParams to identify the parameter to pass to the detail page
  const { id } = useParams();

  // declaring state variables with useState
  const [questionData, setQuestionData] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [timer, setTimer] = useState(false);

  // fetching data from database with useEffect
  useEffect(() => {
    fetch("http://localhost:3001/Questions/" + id)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => setQuestionData(data))
      .catch((e) => console.log(e));
  }, []);

  // handles timer
  const startTimer = () => {
    setTimer(true);
  };
  // handles the showanswer button and the answer
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      <div className="container ">
        {/* <h1>Question Detail Page</h1> */}
        <div className="d-flex align-items-center justify-content-center mt-5 p-5">
          {questionData && (
            <div className="card m-a w-75 text-center p-5 shadow">
              {timer && <h3 className="text-danger">00:00</h3>}
              <h2 className="fs-1 ">Question {questionData.id}</h2>
              <p className="fs-4 mt-5">{questionData.question}</p>
              {showAnswer && (
                <p className="fs-4 w-20 mx-auto text-danger mt-5 text-uppercase">
                  {questionData.answer}
                </p>
              )}
              <button
                onClick={handleShowAnswer}
                className="btn btn-warning mx-auto w-25 fs-5 mt-5"
              >
                Show Answer
              </button>
            </div>
          )}
        </div>
        <timer />
        <div className="controls container  d-flex align-items-center justify-content-center  ">
          <button
            onClick={startTimer}
            className="btn bg-secondary m-4 text-white"
          >
            Start timer
          </button>
          <a href="/api/question" className="btn bg-secondary m-4 text-white">
            Go to Questions Dashboard
          </a>
          <a href="/" className="btn bg-secondary m-4 text-white ">
            Go to Home
          </a>
          <a href="/" className="btn bg-secondary m-4 text-white ">
            Go to Results Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
