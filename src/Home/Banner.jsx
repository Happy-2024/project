import React, { useEffect, useState } from "react";
// import Banner from "../Assests/Banner.png";
import logo from "../Assests/logo.png";
import apiRequest from "../API/Api";
const Baner = () => {
  const [banner, setBanner] = useState();
  const fetchBannerData = async () => {
    try {
      const requestData = {
        banner_type: "WEB",
      };
      const response = await apiRequest("banners", requestData, "WEB");

      if (response.success) {
        const firstBannerImage = response.banner_details[2].image_name;
        setBanner(firstBannerImage); // Uncomment this line to set the banner image in your state
      } else {
        alert("Failed to fetch banner data");
      }
    } catch (error) {
      alert("Error fetching data: " + error.message);
    }
  };

  useEffect(() => {
    fetchBannerData();
  }, []);
  return (
    <div>
      <img src={banner} alt="" className="w-100 h-100" />
      <center className="mt-5">
        <h3>Our Brands</h3>
      </center>
      <div className="d-flex justify-content-around mt-5 flex-wrap">
        <div>
          <img src={logo} alt="" />
          <p>Krishna Naturals Hair care</p>
        </div>
        <div>
          <img src={logo} alt="" />
          <p>Krishna Naturals</p>
        </div>
        <div>
          <img src={logo} alt="" />
          <p>Krishna Naturals Health care</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Baner;
