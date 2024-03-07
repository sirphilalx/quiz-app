import React, { useState } from "react";
import "../components/missionVision.css";

const MisionVision = () => {
  const [activeTab, setActiveTab] = useState("mission");

  //   function that handles the click of the tab
  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="wrapper bg-dark text-light p-5 min-vh-100">
      <div className="container pt-5 active-wrapper-container">
        <div className="header d-flex justify-content-center  active-wrapper">
          <div className={activeTab === "mission" ? "active" : ""}>
            <h2 onClick={() => handleClick("mission")}>Mission</h2>
          </div>
          <div className={activeTab === "vision" ? "active" : ""}>
            <h2 onClick={() => handleClick("vision")}>Vision</h2>
          </div>
        </div>
        <div className="misionVision-body d-flex justify-content-center ">
          {activeTab === "mission" && (
            <div className="mission-vision-statement d-flex flex-column p-5 lh-lg">
              {/* Content for the Mission statement */}
              <h4 className="mb-5 text-center ">
                JBQ Mission Statement <br /> <br />
                <i className="bx bx-cloud bx-lg bx-fade-up"></i>
              </h4>
              <p className="fs-5">
                At <strong> Junior Bible Quiz (JBQ)</strong>, our mission is to
                create a joyful and inclusive space where children aged 9 to 14
                can grow spiritually, connect with their faith, and build
                lasting friendships. Through our engaging quizzes, we aim to
                foster a love for learning about the teachings of Christ in a
                fun and interactive way. Our mission is to inspire a strong
                foundation of faith, values, and community spirit, helping these
                young hearts shine as bright lights in the Church and beyond.
                Together, we embark on a journey of discovery, laughter, and
                love, building a strong bridge to a lifelong relationship with
                God and His teachings. We are committed to nurturing a
                generation that understands, embraces, and joyfully lives the
                message of Christ in their everyday lives
              </p>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="mission-vision-statement d-flex flex-column p-5 lh-lg">
              {/* Content for the Vision statement */}
              <h4 className="mb-5 text-center">
                JBQ Vision Statement <br /> <br />{" "}
                <i className="bx bx-rocket bx-lg bx-fade-up"></i>
              </h4>
              <p className="fs-5">
                In envisioning the future of our quiz program at{" "}
                <strong> Junior Bible Quiz (JBQ)</strong>, we aspire to be a
                beacon of spiritual growth and learning for children aged 9 to
                14 in the Church of Christ community. Our vision is to create a
                dynamic and vibrant environment where every child feels excited
                to explore their faith through quizzes that are not only
                educational but also filled with joy and camaraderie. We see a
                community where young minds are inspired to ask questions, seek
                understanding, and embrace the teachings of Christ with
                enthusiasm. Through our quiz program, we aim to cultivate a
                sense of curiosity, a spirit of teamwork, and a deep connection
                to the values that define our faith. Our vision extends beyond
                the quiz arena to see these children become compassionate
                leaders and active contributors to the Church, carrying the
                light of Christ into their future endeavors. Together, we
                envision a path of continuous spiritual growth, mutual respect,
                and a lasting impact on the lives of these young disciples.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MisionVision;
