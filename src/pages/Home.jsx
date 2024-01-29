import React from "react";
import NavJ from "../components/NavJ";
import "../pages/home.css";
import MisionVision from "../components/MisionVision";
import Donation from "../components/Donation";
import Gallery from "../components/Gallery";
const QuestionDashboard = () => {
  return (
    <div>
      <NavJ />
      <div>
        <div className="section custom-section ">
          <div className="overlay">
            {/* <h1>welcome to JBQ</h1> */}
            <img src="src/assets/jbq_logo.png" alt="" />
          </div>
        </div>
        {/* Stat section */}
        <div className="stats  p-5 border-bottom">
          {/* <h2 className="text-center mb-5">Numbers don't lie 😄</h2> */}
          <div className="stat-items-flex d-flex justify-content-between">
            <div className="stat d-flex flex-column align-items-center ">
              <span className="stat-title mb-3 fs-4">12+ years</span>
              <i className="bx bxs-calendar bx-md bx-tada"></i>
            </div>
            <div className="stat d-flex flex-column align-items-center ">
              <span className="stat-title mb-3 fs-4">548 Children</span>
              <i className="bx bx-male-female bx-md bx-tada"></i>
            </div>
            <div className="stat d-flex flex-column align-items-center ">
              <span className="stat-title mb-3 fs-4">14 Champions</span>
              <i className="bx bx-trophy bx-md bx-tada"></i>
            </div>
            <div className="stat d-flex flex-column align-items-center ">
              <span className="stat-title mb-3 fs-4">88 Churches</span>
              <i className="bx bx-church bx-md bx-tada"></i>
            </div>
            <div className="stat d-flex flex-column align-items-center ">
              <span className="stat-title mb-3 fs-4">36 Bible Books</span>
              <i className="bx bx-bible bx-md bx-tada"></i>
            </div>
          </div>
        </div>
        <MisionVision />
        <Gallery />
      </div>
      <Donation />
    </div>
  );
};

export default QuestionDashboard;
