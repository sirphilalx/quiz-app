import React, { useState } from "react";
import "../components/donate.css";
const Donation = () => {
  const [showAppeal, setShowAppeal] = useState(false);

  //   a function that handles the showappeal button
  const showBegging = () => {
    setShowAppeal(true);
  };

  return (
    <div>
      <div className="donateTrigger d-flex align-items-center ">
        {showAppeal && (
          <div className="donateTray bg-white text-black p-5 w-75">
            <header className="fs-3 text-center">Donate to JBQ</header>
            <div className="closeBtn">
              <i className="bx bx-x bx-md"></i>
            </div>
            <hr />
            <br />
            <main>
              <p>Please send your donation to the following account:</p>
              <br />
              <div className="accountDetails">
                <p>
                  <strong>Bank Name:</strong> Okpokpa, Philemon Inope
                </p>
                <p>
                  <strong>Account Name:</strong> GOMYCODE Microfinance Bank
                </p>
                <p>
                  <strong>Account Number:</strong> 9036148511
                </p>
              </div>
              <br />
              <p className="text-danger text-center">
                <i>God bless you as you make your generous donations, </i>🙏
              </p>
            </main>
          </div>
        )}
        <div className="appeal">
          <h5 className="m-3">donate 🙏</h5>
          <i
            onClick={showBegging}
            className="bx bx-donate-heart bx-lg bx-border-circle"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Donation;
