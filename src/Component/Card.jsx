import React from "react";
import Star from "../Assests/Star.png";
import message from "../Assests/message.png";

const ProductCard = ({ product, handleAddToCart, gotoPage }) => {

  const description = product?.description || product?.product_details?.meta_description;
  const title = product?.title || product?.product_details?.meta_title;
  
  const truncateText = (text, wordLimit) => {
    if (!text) return "";
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") 
      : text;
  };
  
  const truncatedDescription = truncateText(description, 5);
  const truncatedTitle = truncateText(title,8);
  

  return (
    product.id && (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div
          key={product?.id}
          id={product?.id}
          className="card position-relative m-2"
        >
          {product.isBestseller && <p className="best-seller">BEST SELLER</p>}
          {product.ishealthcare && <p className="best-seller">BEST SELLER</p>}
          {product.isBabycare && <p className="best-seller">New Arrivals</p>}
          {product.isEyecare && <p className="best-seller">New Arrivals</p>}
          {product.isFacecare && <p className="best-seller">New Arrivals</p>}
          {product.isHaircare && <p className="best-seller">New Arrivals</p>}
          {product.isNewArrival && <p className="best-seller">New Arrivals</p>}
          {product.isOthers && <p className="best-seller">Best Seller</p>}
          <img
            src={product?.image || product?.product_details?.featured_image}
            alt=""
            style={{ height: "300px", width: "100%", objectFit: "cover" }}
            onClick={() => gotoPage(product)}
          />
          <div
            className="card-body d-flex flex-column justify-content-between"
            style={{ padding: "1rem", height: "300px" }}
          >
            <div>
              <p
                style={{ fontSize: "16px", marginBottom: "0.5rem" }}
                className="text-center"
              >
                {truncatedTitle}
              </p>
              <p
                style={{ color: "#01572E", marginBottom: "1rem" }}
                className="text-center"
              >
                {truncatedDescription}
              </p>
              <div className="d-flex justify-content-center align-items-center mb-2 flex-wrap">
                <img
                  src={Star}
                  alt="Star"
                  className="me-1"
                  style={{ width: "1rem" }}
                />
                <p
                  className="mb-0 me-1"
                  style={{ fontSize: "0.875rem", fontWeight: "400" }}
                >
                  {product.rating}
                </p>
                <div
                  className="border-start border-1 border-secondary mx-1"
                  style={{ height: "1.5rem" }}
                ></div>
                <img
                  src={message}
                  alt="Reviews"
                  className="me-1"
                  style={{ width: "1rem" }}
                />
                <p
                  className="cards mb-0"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.875rem",
                    fontWeight: "400",
                  }}
                >
                  {product?.reviews || product?.product_details?.review_count}{" "}
                  Reviews
                </p>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-center flex-wrap gap-2 mb-3">
                <p style={{ fontSize: "20px", fontWeight: "500" }}>
                  &#8377;
                  {product?.price || product?.product_details?.sales_price}
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "300",
                    textDecoration: "line-through",
                  }}
                >
                  &#8377;
                  {product?.oldPrice || product?.product_details?.regular_price}
                </p>
              </div>
              <button
                className="cart_btn"
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;

// .length > 50 ? `${product_details?.meta_description.substring(0, 50)}...` :product_details.?meta_description
