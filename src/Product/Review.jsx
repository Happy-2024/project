import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Bottle from "../Assests/Bottle.png";
import ProductList from "../Component/List";


const Review = ({ handleAddToCart, gotoPage }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const products = [
    {
      id: "product-1",
      image: Bottle,
      title: "Hibiscus Shampoo With Vitamin C and Vitamin D for BABY care product...",
      description: "Reduces Hair Fall | Strengthens Hair | Softens Hair",
      rating: "4.7",
      reviews: "672",
      price: "243.00",
      oldPrice: "343.00",
      isBestseller: true,
    },
    {
      id: "product-2",
      image: Bottle,
      title: "Hibiscus Shampoo With Vitamin C and Vitamin D for BABY care product...",
      description: "Reduces Hair Fall | Strengthens Hair | Softens Hair",
      rating: "4.7",
      reviews: "672",
      price: "243.00",
      oldPrice: "343.00",
      isBestseller: true,
    },
    {
      id: "product-3",
      image: Bottle,
      title: "Hibiscus Shampoo With Vitamin C and Vitamin D for BABY care product...",
      description: "Reduces Hair Fall | Strengthens Hair | Softens Hair",
      rating: "4.7",
      reviews: "672",
      price: "243.00",
      oldPrice: "343.00",
      isBestseller: true,
    },
    {
      id: "product-4",
      image: Bottle,
      title: "Hibiscus Shampoo With Vitamin C and Vitamin D for BABY care product...",
      description: "Reduces Hair Fall | Strengthens Hair | Softens Hair",
      rating: "4.7",
      reviews: "672",
      price: "243.00",
      oldPrice: "343.00",
      isBestseller: true,
    },
  ];

  return (
    <div className="container">
      <h5>Add a Review</h5>
      <p>Your Email Address will Not be Published</p>
      <div className="d-flex gap-3 align-items-center">
        <h6>Your Rating</h6>
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`fa-star ${star <= rating ? "fas" : "far"}`}
            onClick={() => handleRating(star)}
            style={{
              cursor: "pointer",
              color: star <= rating ? "gold" : "gray",
            }}
          ></i>
        ))}
      </div>
      <div className="mt-3">
        <label htmlFor="review">
          Your Review <span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <textarea
          id="review"
          rows="4"
          cols="50"
          value={review}
          onChange={handleReviewChange}
          style={{ width: "100%" }}
        />
        <label htmlFor="name">
          Name<span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input type="text" name="name" id="name" style={{ width: "100%" }} />
        <br />

        <label htmlFor="email">
          Email<span style={{ color: "red" }}>*</span>
        </label>
        <br />
        <input type="email" name="email" id="email" style={{ width: "100%" }} />
        <br />
        <br />

        <div className="d-flex gap-3">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <p style={{marginTop:'14px'}}>Save My Name Email And All the Details For The Next Time I Comment</p>
        </div>
        <input
          type="submit"
          value="Submit"
          style={{
            backgroundColor: "#BA2026",
            color: "white",
            border: "1px solid #BA2026 ",
            padding:'8px',
            height:'40px',
            width:'80px'
          }}
        />
      </div>
      <div>
        <h3 className="mt-5">Frequently Bought Together</h3>

        <div className="container mt-4">
          <ProductList
            products={products}
            handleAddToCart={handleAddToCart}
            gotoPage={gotoPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
