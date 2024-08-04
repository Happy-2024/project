import React, { useEffect, useState } from "react";
import "./Concern.css";
import Hair from "../Assests/Hair.png";
import Hair1 from "../Assests/Hair1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import apiRequest from "../API/Api";

const Concern = () => {
  const [newConcern, setNewConcern] = useState([]);

  const fetchConcernData = async () => {
    try {
      const requestData = {
        auth_token: "4d46eff36c1d414cade7d453defe6212",
      };
      const response = await apiRequest(
        "shop_by_concern",
        requestData,
        "CONCERN"
      );
      if (response.success) {
        const Data = response.shop_by_concern;
        setNewConcern(Data);
      }
    } catch (error) {
      alert("Error fetching data: " + error.message);
    }
  };

  useEffect(() => {
    fetchConcernData();
  }, []);

  return (
    <div>
      <h3 className="text-center mt-5">Shop By Concern</h3>
      <p className="text-center">We Provide Problem Faced Solution</p>
      <nav>
        <div className="contain">
          <div className="Concerntab tabs">
            <div
              className="nav nav-tabs border-0 justify-content-center"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="radio-1"
                data-bs-toggle="tab"
                data-bs-target="#nav-hair"
                type="button"
                role="tab"
                aria-controls="nav-hair"
                aria-selected="true"
              >
                HAIR
              </button>
              <button
                className="nav-link"
                id="nav-face-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-face"
                type="button"
                role="tab"
                aria-controls="nav-face"
                aria-selected="false"
              >
                Face
              </button>
              <button
                className="nav-link"
                id="nav-body-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-body"
                type="button"
                role="tab"
                aria-controls="nav-body"
                aria-selected="false"
              >
                Body
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-hair"
          role="tabpanel"
          aria-labelledby="nav-hair-tab"
          tabIndex="0"
        >
          <div className="container Shopconcern mt-5">
            {newConcern
              .filter((item) => item.category_name === "Hair Care")
              .map((category) =>
                category.concerns.map(
                  (concern, index) => (
                    (
                      <img
                        key={index}
                        src={concern?.concern_image_url}
                        alt={concern?.concern_name}
                        style={{
                          width: "150px",
                          height: "152px",
                          borderRadius: "50%",
                        }}
                      />
                    )
                  )
                )
              )}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-face"
          role="tabpanel"
          aria-labelledby="nav-face-tab"
          tabIndex="0"
        >
          <div className="container Shopconcern mt-5">
            {newConcern
              .filter((item) => item.category_name === "Face Care")
              .map((category) =>
                category.concerns.map((concern, index) => (
                  <img
                    key={index}
                    src={concern?.concern_image_url}
                    alt={concern.concern_name}
                    style={{
                      width: "150px",
                      height: "152px",
                      borderRadius: "50%",
                    }}
                  />
                ))
              )}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-body"
          role="tabpanel"
          aria-labelledby="nav-body-tab"
          tabIndex="0"
        >
          <div className="container Shopconcern mt-5">
            {newConcern
              .filter((item) => item.category_name === "Body Care")
              .map((category) =>
                category.concerns.map((concern, index) => (
                  <img
                    key={index}
                    src={concern?.concern_image_url}
                    alt={concern.concern_name}
                    style={{
                      width: "150px",
                      height: "152px",
                      borderRadius: "50%",
                    }}
                  />
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concern;
