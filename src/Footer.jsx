import React from "react";
import Hand from "./Assests/Hand.png";
import leaf from "./Assests/leaf.png";
import light from "./Assests/light.png";
import ink from "./Assests/ink.png";
import face from "./Assests/face.png";
import Cream from "./Assests/Cream.png";
import playstore from "./Assests/playstore.png";
import logo from "./Assests/logo.png";
const Footer = () => {
  return (
    <>
      <div className=" mt-5 container d-flex justify-content-evenly">
        <img src={Hand} alt="" />
        <img src={leaf} alt="" />
        <img src={light} alt="" />
        <img src={ink} alt="" />
        <img src={face} alt="" />
        <img src={Cream} alt="" />
      </div>
      <div className="mt-5">
        <img src={playstore} alt="" style={{ width: "100%" }} />
      </div>

      <div className="container mt-5">
        <div className="row justify-content-around">
          <div className="col-lg-3 col-md-12 text-center">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <div className="col-lg-3 col-md-12">
            <h6 style={{ color: "darkgreen" }}>SHOP BY</h6>
            <div style={{ fontWeight: "300" }}>
              <p>Wishlist</p>
              <p>Login/Register</p>
              <p>Track Order</p>
              <p>Checkout</p>
              <p>Shop All Products</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <h6 style={{ color: "darkgreen" }}>QUICK LINK</h6>
            <div style={{ fontWeight: "300" }}>
              <p>Baby Care</p>
              <p>Body Care</p>
              <p>Eye Care</p>
              <p>Face Care</p>
              <p>Foot Care</p>
              <p>Hair Care Products</p>
              <p>Health Care </p>
              <p>Lip Care </p>
              <p>Blog</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <h6 style={{ color: "darkgreen" }}>Follow US</h6>
            <br />
            <div style={{ color: "green", lineHeight: "12px" }}>
              <p>+91 9856254777 (Whatsapp only)</p>
              <p>admin@lakshmikrishnaNaturals.com</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-around">
        <p>
          @2024 Lakshmi krishna Naturals All rights Developed & Maintained by{" "}
          <a href="#" style={{ color: "darkgreen" }}>
            TechnoTackle
          </a>
        </p>
        <p>privacy policy</p>
        <p>Privacy & Refunds</p>
      </div>
    </>
  );
};

export default Footer;
