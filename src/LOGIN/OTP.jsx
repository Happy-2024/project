import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assests/logo.png";
import Header from "../Home/Header";
import Footer from "../Footer";

import "./OTP.css"; // Import your CSS file for styling
const OtpPage = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const number = localStorage.getItem("mobileNumber");
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyOtp = () => {
    // Add your OTP verification logic here
  };

  const gotoHoe = () => {
    navigate("/home");
  };

  return (
    <>
      <Header />
      <div className="logi-page">
        <div className="log">
          <img src={logo} alt="Lakshmi Krishna Logo" />
          <h1 style={{ color: "#10753F", fontSize: "2.5rem" }}>
            lakshmi krishna
          </h1>
          <p className="text-danger" style={{ fontSize: "1rem" }}>
            Dazzling solutions with natural touch!
          </p>
        </div>
        <div className="verify-section">
          <h2>Verify your mobile number</h2>
          <p>+91{number}</p>
          <a href="/change-number">Change Number?</a>
          <div className="ot-input">
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>
          <div className="timer">
            {timer > 0
              ? `0:${timer < 10 ? `0${timer}` : timer}`
              : "Time expired"}
          </div>
          <button
            className="butto"
            onClick={handleVerifyOtp}
            disabled={timer === 0}
          >
            Verify OTP
          </button>
          <button className="butto" onClick={gotoHoe}></button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OtpPage;
