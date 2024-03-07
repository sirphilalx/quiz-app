import React, { useEffect, useState } from "react";
import NavJ from "../components/NavJ";
import { Link, useNavigate } from "react-router-dom";
import "../pages/home.css";

const QuestionDashboard = () => {
  // declaring state variables with useState
  const [questionData, setQuestionData] = useState(null);

  // function for going into the detail page
  const navigate = useNavigate();
  const LoadDetail = (id) => {
    // Update the state to mark the question as clicked
    setQuestionData((prevData) =>
      prevData.map((q) => (q.id === id ? { ...q, clicked: !q.clicked } : q))
    );

    // navigate to the question detail page
    navigate("/api/question/detail/" + id);
  };

  // fetching data from database with useEffect
  useEffect(() => {
    fetch("http://localhost:3001/Questions")
      .then((response) => response.json())
      .then((data) =>
        setQuestionData(data.map((q) => ({ ...q, clicked: false })))
      )
      .catch((e) => console.log(e));
  }, []);

  console.log(questionData);

  return (
    <div>
      <NavJ />
      <div className="container pt-5">
        <h1 className="mb-5">welcome to the Question Page</h1>
        <div className="d-flex">
          <ul className="list-unstyled d-flex flex-wrap">
            {questionData &&
              questionData.map((q) => (
                <li key={q.id}>
                  <Link
                    onClick={() => LoadDetail(q.id)}
                    to={`/api/question/detail/${q.id}`}
                    // className={`btn ${
                    //   q.clicked ? "btn-secondary" : "btn-success"
                    // } p-4 w-12 h-12 m-2`}

                    className={`btn ${
                      q.clicked ? "btn-secondary link-visited" : "btn-success"
                    } p-4 w-12 h-12 m-2`}
                  >
                    {q.id}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuestionDashboard;
