import React,{useEffect}from "react";
import Header from "../Home/Header";
import Banner from "../Home/Banner";
import Bestseller from "../Home/Bestseller";
import Concern from "../Home/Concern";
import Newarrival from "../Home/Newarrivals";
// import Facecare from '../Home/Facecare'
// import Haircare from '../Home/Haircare'
// import Babycare from '../Home/Babycare'
// import Healthcare from '../Home/Healthcare'
// import Eyecare from '../Home/Eyecare'
import Ba from "../Home/Ba";
import Location from "../Home/Location";
import Content from "./Content";
import Footer from "../Footer";
import Category from "./Category";

const Hoe = () => {
  // useEffect(() => {
  //   // Clear the localStorage
  //   localStorage.removeItem("product");  
  // }, []);
  return (
    <div>
      <Header />
      <Banner />
      <Bestseller />
      <Concern />
      <Newarrival />
      <Category />
      {/* <Facecare/>
      <Haircare/>
      <Babycare/>
      <Healthcare/>
      <Eyecare/> */}
      <Ba />
      <Location />
      <Content />
      <Footer />
    </div>
  );
};

export default Hoe;
