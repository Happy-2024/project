import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assests/logo.png";
import Header from "../Home/Header";
import Footer from "../Footer";
import apiRequest from "../API/Api";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const fetchLoginPageData = async () => {
    if (!mobileNumber || !/^\d{10}$/.test(mobileNumber)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }

    const requestData = {
      auth_token: "44b6d3e34110ba8c7030cb76185a548f", // Correct token
      mobile_number: mobileNumber,
      Whatsapp_update: "1",
      otp_sent_mode: "SMS",
    };

    try {
      const response = await apiRequest(
        "check_login",
        requestData,
        mobileNumber
      );
      localStorage.setItem("mobileNumber", mobileNumber);
      if (response.success) {
        setError(null);
        navigate("/otp"); // Navigate to OTP page on success
      } else {
        setError(response.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred while logging in");
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100">
          <div className="col-md-6 text-center d-flex flex-column align-items-center justify-content-center">
            <img
              src={logo}
              alt="Lakshmi Krishna Logo"
              className="img-fluid mb-3"
              style={{ maxWidth: "350px" }}
            />
            <h1
              className="mt-3"
              style={{ color: "#10753F", fontSize: "2.5rem" }}
            >
              lakshmi krishna
            </h1>
            <p className="text-danger" style={{ fontSize: "1rem" }}>
              Dazzling solutions with natural touch!
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2>Enter your mobile number</h2>
            <div className="input-group mb-3">
              <span className="input-group-text">+91</span>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your mobile number"
                style={{ fontSize: "1.25rem" }}
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <button
              className="btn btn-success"
              style={{ fontSize: "1.25rem", padding: "0.65rem" }}
              onClick={fetchLoginPageData} // Ensure this calls fetchLoginPageData
            >
              Login
            </button>
            {error && <p className="text-danger mt-3">{error}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
