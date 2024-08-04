import React, { useState } from "react";
import "./Faq.css"; // Assuming you have a CSS file for styling
import bluetick from'../Assests/bluetick.png'
const Faq = () => {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  const toggleDropdown = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  const reviewsData = [
    {
      name: "Arthi",
      date: "January 16, 2020",
      rating: 5,
      review:
        "Good product..I could notice my hairs regrowth after 3 months of use..the scent and texture are also excellent. Many thanks, Lakshmi Krishna.",
    },
    {
      name: "Mahe",
      date: "February 11, 2020",
      rating: 5,
      review:
        "I just started using this hair regrowth oil and I am already seeing results. I have a thinning hair problem and this product is easing my problem. I would highly recommend this product.",
    },
    {
      name: "Prasana",
      date: "March 3, 2020",
      rating: 4,
      review: "My Hair starts regrowth, awesome..!!",
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`fa fa-star ${index < rating ? "checked" : ""}`}
      ></span>
    ));
  };

  return (
    <div className="container">
      <h5 className="mt-5">FAQ?</h5>
      <div>
        <button
          className="dropbtn"
          style={{ all: "unset", cursor: "pointer" }}
          onClick={() => toggleDropdown(0)}
        >
          How does Oiling Add to your Hair Growth ?
        </button>
        {isOpen[0] && (
          <div className="dropdown-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam quasi, odit vel repudiandae tempora ratione quidem quae
              ut corporis corrupti tempore quos sunt suscipit quas molestias aut
              illo odio doloremque.
            </p>
          </div>
        )}
      </div>
      <br />
      <div>
        <button
          className="dropbtn"
          style={{ all: "unset", cursor: "pointer" }}
          onClick={() => toggleDropdown(1)}
        >
          Which Herbal Oil is Best for Hair Growth?
        </button>
        {isOpen[1] && (
          <div className="dropdown-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam quasi, odit vel repudiandae tempora ratione quidem quae
              ut corporis corrupti tempore quos sunt suscipit quas molestias aut
              illo odio doloremque.
            </p>
          </div>
        )}
      </div>
      <br />
      <div>
        <button
          className="dropbtn"
          style={{ all: "unset", cursor: "pointer" }}
          onClick={() => toggleDropdown(2)}
        >
          What are the benefits of using Castor oil for Hair?
        </button>
        {isOpen[2] && (
          <div className="dropdown-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam quasi, odit vel repudiandae tempora ratione quidem quae
              ut corporis corrupti tempore quos sunt suscipit quas molestias aut
              illo odio doloremque.
            </p>
          </div>
        )}
      </div>
      <br />
      <div>
        <button
          className="dropbtn"
          style={{ all: "unset", cursor: "pointer" }}
          onClick={() => toggleDropdown(3)}
        >
          Why Herbal Oil?
        </button>
        {isOpen[3] && (
          <div className="dropdown-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam quasi, odit vel repudiandae tempora ratione quidem quae
              ut corporis corrupti tempore quos sunt suscipit quas molestias aut
              illo odio doloremque.
            </p>
          </div>
        )}
      </div>

      <div className="container mt-4">
        <h3>
          Reviews 
          <img src={bluetick} alt=""  style={{width:'35px'}}/>
           <span className="verified-users">Only verified users</span>
        </h3>
        <div className="overall-rating d-flex align-items-center">
          <div className="rating-number">
            <h1>
              4.8 <span className="fa fa-star"></span>
            </h1>
            <p>86 Ratings & 86 Reviews</p>
          </div>
          <div className="rating-bars">
            {[5, 4, 3, 2, 1].map((star, index) => (
              <div key={index} className="rating-bar d-flex align-items-center">
                <span>
                  {star} <span className="fa fa-star"></span>
                </span>
                <div className="progress flex-grow-1 mx-2">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${
                        star === 5 ? 74 : star === 4 ? 10 : star === 3 ? 2 : 0
                      }%`,
                    }}
                  ></div>
                </div>
                <span>
                  {star === 5 ? 74 : star === 4 ? 10 : star === 3 ? 2 : 0}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="review-list mt-4">
          {reviewsData.map((review, index) => (
            <div key={index} className="review-item d-flex">
              <div className="review-number">{index + 1}.</div>
              <div className="review-content">
                <div className="review-header d-flex align-items-center">
                  <div className="review-avatar"></div>
                  <div className="ml-2">
                    <h5>{review.name}</h5>
                    <p>{review.date}</p>
                    <div className="star-rating">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p>{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
