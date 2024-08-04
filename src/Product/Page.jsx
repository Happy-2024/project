import React, { useState, useContext } from "react";
import Bottle from "../Assests/Bottle.png";
import message from "../Assests/message.png";
import Star from "../Assests/Star.png";
import { Carousel } from "react-bootstrap";
import social from "../Assests/social.png";
import "./Page.css";
import eye from "../Assests/eye.png";
import ca from "../Assests/ca.png";
import BA from "../Assests/BA.png";
import { CartContext } from "../Home/Cartcontext"; // Adjust the path if needed

const Page = () => {
  const [quantity, setQuantity] = useState(1);
  const bottle = localStorage.getItem("product");
  const singleDta = localStorage.getItem("productDetails");
  const salesPrice = localStorage.getItem("salesPrice");
  const product = JSON.parse(bottle);
  const unitPrice = salesPrice; // Define the unit price

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const { addToCart, addToWishlist } = useContext(CartContext);
  const handleAddToCart = () => {
    addToCart(); // This will update cartCount in CartContext
  };
  const handleAddToWishlist = () => {
    addToWishlist();
  };
  return (
    <div>
      <h5 className="container mt-3">
        HAIR CARE PRODUCTS / HAIR OIL /{" "}
        <span style={{ color: "#BA2026" }}>24 HERBS HAIR FALL CONTROL OIL</span>
      </h5>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                      product?.image || singleDta
                        ? singleDta
                        : product?.featured_image
                    }
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                      product?.image || singleDta
                        ? singleDta
                        : product?.featured_image
                    }
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                      product?.image || singleDta
                        ? singleDta
                        : product?.featured_image
                    }
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="d-flex gap-4">
              <div
                className="card mt-2"
                style={{ width: "75px", height: "75px" }}
              >
                <img
                  src={
                    product?.image || singleDta
                      ? singleDta
                      : product?.featured_image
                  }
                  alt="Small bottle"
                />
              </div>
              <div
                className="card mt-2"
                style={{ width: "75px", height: "75px" }}
              >
                <img
                  src={
                    product?.image || singleDta
                      ? singleDta
                      : product?.featured_image
                  }
                  alt="Small bottle"
                />
              </div>
              <div
                className="card mt-2"
                style={{ width: "75px", height: "75px" }}
              >
                <img
                  src={
                    product?.image || singleDta
                      ? singleDta
                      : product?.featured_image
                  }
                  alt="Small bottle"
                />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex flex-column">
              <div>
                <h6>
                  Hibiscus Shampoo With Vitamin C and Vitamin D for Hair care
                  product
                </h6>
                <p style={{ color: "#01572E" }}>
                  Reduces Hair Fall | Strengthens Hair | Softens Hair
                </p>
                <div className="d-flex justify-content-left align-items-center mb-2">
                  <img
                    src={Star}
                    alt="Star"
                    style={{ marginRight: "0.5rem" }}
                  />
                  <p className="mb-0" style={{ marginRight: "0.5rem" }}>
                    4.7
                  </p>
                  <div
                    style={{
                      borderLeft: "1px solid #ccc",
                      height: "1.5rem",
                      marginRight: "0.5rem",
                    }}
                  ></div>
                  <img
                    src={message}
                    alt="Reviews"
                    style={{ marginRight: "0.5rem" }}
                  />
                  <p className="mb-0"> Reviews</p>
                </div>
                <p style={{ fontSize: "24px", color: "#01572E" }}>Price</p>
                {/* <div className='d-flex align-items-center gap-3'> */}
                <p
                  style={{
                    margin: "0",
                    minWidth: "60px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                  className="mt-0"
                >
                  &#8377;{unitPrice * quantity}
                  <span
                    style={{
                      textDecoration: "line-through",
                      fontWeight: "400",
                    }}
                  >
                    &nbsp;&nbsp;&#8377;{product?.price || product?.sales_price}
                  </span>
                  <p style={{ fontWeight: "400", fontSize: "13px" }}>
                    Inclusive of all taxes
                  </p>
                </p>
                <p>Qty</p>
                <button
                  className="d-flex"
                  style={{
                    backgroundColor: "white",
                    border: "0.5px solid black",
                    marginTop: "0px",
                  }}
                >
                  <button
                    onClick={handleDecreaseQuantity}
                    style={{ all: "unset", cursor: "pointer" }}
                  >
                    -
                  </button>
                  <p style={{ margin: "0 10px" }}>{quantity}</p>
                  <button
                    onClick={handleIncreaseQuantity}
                    style={{ all: "unset", cursor: "pointer" }}
                  >
                    +
                  </button>
                </button>
                {/* </div> */}
              </div>
              <div>
                <p>Size</p>
                <div className="d-flex gap-2 container-fluid but">
                  <button className="bt">200ML</button>
                  <button className="bt">500ML</button>
                  <button className="bt">500 ML (Combo)</button>
                </div>
                <div className="mt-3 wishlist">
                  <button
                    className="btt"
                    onClick={() => {
                      handleAddToWishlist();
                    }}
                  >
                    ADD TO WISHLIST
                  </button>
                </div>
                <img src={social} alt="Social icons" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card"
              style={{
                maxWidth: "400px",
                margin: "auto",
                padding: "15px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <div className="d-flex justify-content-left align-items-center mb-2">
                <img src={Star} alt="Star" style={{ marginRight: "0.5rem" }} />
                <p className="mb-0" style={{ marginRight: "0.5rem" }}>
                  4.7
                </p>
                <div
                  style={{
                    borderLeft: "1px solid #ccc",
                    height: "1.5rem",
                    marginRight: "0.5rem",
                  }}
                ></div>
                <img
                  src={message}
                  alt="Reviews"
                  style={{ marginRight: "0.5rem" }}
                />
                <p className="mb-0"> Reviews</p>
              </div>

              <p
                style={{ fontSize: "24px", color: "#01572E", margin: "5px 0" }}
              >
                Price
              </p>

              <div style={{ marginBottom: "10px" }}>
                <p
                  style={{
                    margin: "0",
                    minWidth: "60px",
                    textAlign: "left",
                    fontWeight: "500",
                  }}
                  className="mt-0"
                >
                  &#8377; {unitPrice * quantity}
                  <span
                    style={{
                      textDecoration: "line-through",
                      fontWeight: "400",
                    }}
                  >
                    &nbsp;&nbsp;&#8377; {unitPrice}
                  </span>
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    fontWeight: "400",
                    fontSize: "13px",
                  }}
                >
                  Inclusive of all taxes
                </p>
                <p>Qty</p>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "0.5px solid black",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <button
                      onClick={handleDecreaseQuantity}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      -
                    </button>
                    <p style={{ margin: "0 10px" }}>{quantity}</p>
                    <button
                      onClick={handleIncreaseQuantity}
                      style={{ all: "unset", cursor: "pointer" }}
                    >
                      +
                    </button>
                  </div>
                </button>
              </div>
              <div>
                <p className="mb-0" style={{ margin: "5px 0" }}>
                  Size
                </p>
                <div className="bot">
                  <button className="pt">200ML</button>
                  <button className="pt">500ML</button>
                  <button className="pt">500 ML (Combo)</button>
                </div>
              </div>

              <div
                className="d-flex align-items-center"
                style={{ marginTop: "10px" }}
              >
                <img
                  src={eye}
                  alt="Eye icon"
                  style={{ margin: "0 5px", height: "15px", width: "15px" }}
                />
                <p style={{ fontSize: "14px", margin: "0" }}>
                  48,744 Customers viewed this product.
                </p>
              </div>

              <div
                className="d-flex align-items-center"
                style={{ marginTop: "5px" }}
              >
                <img
                  src={ca}
                  alt="Cart icon"
                  style={{ margin: "0 5px", height: "15px", width: "15px" }}
                />
                <p style={{ fontSize: "14px", margin: "0" }}>
                  80 Customers buying this product
                </p>
              </div>

              <button
                style={{
                  backgroundColor: "darkgreen",
                  borderRadius: "50px",
                  margin: "10px 0",
                  color: "white",
                  padding: "10px",
                  width: "100%",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleAddToCart();
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-2">
        <h5>Product Description</h5>
        <p>
          Pamper your skin with the age-old tradition of Ubtan and let your
          dull, tanned skin rejuvenate and feel fresh & bright. Undo the effects
          of tan, pollution, dirt, harmful UV rays, and harsh weather conditions
          with Mamaearth Ubtan Face Wash.
        </p>
        <p>
          Crafted to give you glowing skin, our Ubtan Face Wash is enriched with
          the natural goodness of Turmeric and Saffron. Antioxidants in Turmeric
          protect skin from free radical damage. It’s also traditionally known
          to fight sun tan and brighten skin tone. Carrot Seed Oil and Saffron
          clear spots and help in tan removal. Walnut Beads in Ubtan Face Wash
          help gently exfoliate and reduce tan while brightening the skin.
        </p>
      </div>
      <div className="container mt-3">
        <h4>Results of Hibiscus Shampoo </h4>
        <div className="d-flex justify-content-around mt-4 flex-wrap">
          <img src={BA} alt="Before and After" />
          <img src={BA} alt="Before and After" />
          <img src={BA} alt="Before and After" />
          <img src={BA} alt="Before and After" />
        </div>
      </div>
    </div>
  );
};

export default Page;
