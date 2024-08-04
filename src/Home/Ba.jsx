import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import apiRequest from "../API/Api";
import "./Ba.css";

const Ba = () => {
  const [beforeData, setBeforeData] = useState({});
  const [activeTab, setActiveTab] = useState("hair");

  const fetchBeforeData = async () => {
    try {
      const requestData = {
        auth_token: "df9fd6ce5b0640ec0bcb5035f79a6589",
      };
      const response = await apiRequest("before_after", requestData, "BEFOREAFTER");
      if (response.success) {
        setBeforeData(response.before_after);
      }
    } catch (error) {
      alert("Error fetching data: " + error.message);
    }
  };

  useEffect(() => {
    fetchBeforeData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Header Section */}
      <h3 className="text-center mt-5">Before & After</h3>
      <p className="text-center">Real User & Real review</p>

      {/* Tabs Section */}
      <nav>
        <div className="container d-flex justify-content-center">
          <ul className="nav nav-tabs" id="nav-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "hair" ? "active" : ""}`}
                id="nav-hair-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-hair"
                type="button"
                role="tab"
                aria-controls="nav-hair"
                aria-selected={activeTab === "hair"}
                onClick={() => handleTabClick("hair")}
              >
                HAIR
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "face" ? "active" : ""}`}
                id="nav-face-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-face"
                type="button"
                role="tab"
                aria-controls="nav-face"
                aria-selected={activeTab === "face"}
                onClick={() => handleTabClick("face")}
              >
                FACE
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === "body" ? "active" : ""}`}
                id="nav-body-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-body"
                type="button"
                role="tab"
                aria-controls="nav-body"
                aria-selected={activeTab === "body"}
                onClick={() => handleTabClick("body")}
              >
                BODY
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="tab-content" id="nav-tabContent">
        <div
          className={`tab-pane fade ${activeTab === "hair" ? "show active" : ""}`}
          id="nav-hair"
          role="tabpanel"
          aria-labelledby="nav-hair-tab"
          tabIndex="0"
        >
          <div className="mt-5 container d-flex justify-content-evenly flex-wrap">
            {beforeData[1]?.results?.map((item, index) => (
              <img
                key={index}
                src={item.result_image_name}
                alt={`Product ${item.product_id}`}
                style={{
                  width: "150px",
                  height: "152px",
                  borderRadius:'10px'
                }}
              />
            ))}
          </div>
        </div>
        <div
          className={`tab-pane fade ${activeTab === "face" ? "show active" : ""}`}
          id="nav-face"
          role="tabpanel"
          aria-labelledby="nav-face-tab"
          tabIndex="0"
        >
          <div className="mt-5 container d-flex justify-content-evenly flex-wrap">
            {beforeData[2]?.results?.map((item, index) => (
              <img
                key={index}
                src={item.result_image_name}
                alt={`Product ${item.product_id}`}
                style={{
                  width: "150px",
                  height: "152px",
                   borderRadius:'10px'
                }}
              />
            ))}
          </div>
        </div>
        <div
          className={`tab-pane fade ${activeTab === "body" ? "show active" : ""}`}
          id="nav-body"
          role="tabpanel"
          aria-labelledby="nav-body-tab"
          tabIndex="0"
        >
          <div className="mt-5 container d-flex justify-content-evenly flex-wrap">
            {beforeData[3]?.results?.map((item, index) => (
              <img
                key={index}
                src={item.result_image_name}
                alt={`Product ${item.product_id}`}
                style={{
                  width: "150px",
                  height: "152px",
                   borderRadius:'10px'
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Ba;
