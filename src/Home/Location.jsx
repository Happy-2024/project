import React from "react";
import Address from "../Assests/Address.png";
import mob from "../Assests/Mob.png";
import clock from "../Assests/Clock.png";
import map from "../Assests/Map.png";
import "./Location.css";

const Location = () => {
  return (
    <>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h3>Shop By Location</h3>
        <p>Visit our nearby shop</p>
      </div>
      <div className="container mt-3 d-flex align-items-start justify-content-between flex-wrap">
        <div className="details">
          <p style={{ fontWeight: "500", fontSize: "20px" }}>Address:</p>
          <div className="d-flex align-items-center gap-2">
            <img src={Address} alt="" width={"24px"} height={"24px"} />
            <p>60/a, 11th Avenue, Ashok nagar, Chennai-600083</p>
          </div>
          <p style={{ fontWeight: "500", fontSize: "20px" }}>Phone:</p>
          <div className="d-flex align-items-center gap-2">
            <img src={mob} alt="" width={"24px"} height={"24px"} />
            <p>97911 30444 </p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={mob} alt="" width={"24px"} height={"24px"} />
            <p>97911 40444 </p>
          </div>
          <p style={{ fontWeight: "500", fontSize: "20px" }}>We Are Open:</p>
          <div className="d-flex align-items-center gap-2">
            <img src={clock} alt="" width={"24px"} height={"24px"} />
            <p>
              Mon - Sat{" "}
              <span style={{ fontWeight: "700", fontSize: "16px" }}>
                10:00 AM to 08:00 PM
              </span>
            </p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={clock} alt="" width={"24px"} height={"24px"} />
            <p>
              Sunday
              <span style={{ fontWeight: "700", fontSize: "16px" }}>
                11:00 AM to 02:00 PM
              </span>
            </p>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.722246510183!2d76.93520511079522!3d10.984325155279056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85943b585c6d3%3A0xabc0da621c9bbcad!2sTechno%20Tackle%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1721230523489!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Techno Tackle Software Solutions Location"
          ></iframe>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Location;
