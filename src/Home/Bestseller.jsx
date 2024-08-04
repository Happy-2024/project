import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./Cartcontext";
import ProductList from "../Component/List";
import apiRequest from "../API/Api";

const Bestseller = () => {
  const [bestSellerData, setBestSellerData] = useState([]);

  const fetchBestSellerData = async () => {
    try {
      const requestData = {
        user_id: 1,
      };
      const response = await apiRequest("best_seller", requestData, "BEST");
      if (response.success) {
        const fetchedBestSellerData = response.best_sellers.map((seller) => {
          const { product_details } = seller;
          return {
            id: product_details.id,
            image: product_details.featured_image,
            title: product_details.product_name,
            description: product_details.meta_description,
            rating: product_details.avg_rating || "No ratings",
            reviews: product_details.review_count,
            price: product_details.sales_price || product_details.regular_price,
            oldPrice: product_details.regular_price,
            isBestseller: true, // Set based on your criteria
          };
        });
        setBestSellerData(fetchedBestSellerData);
      } else {
        alert("Failed to fetch best seller data");
      }
    } catch (error) {
      alert("Error fetching data: " + error.message);
    }
  };

  useEffect(() => {
    fetchBestSellerData();
  }, []);

  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart();

    // localStorage.setItem("product", JSON.stringify(product));
  };

  const gotoPage = (product) => {
    localStorage.setItem("productDetails", product?.image);
    localStorage.setItem("salesPrice", product?.price);
    navigate(`/product/${product?.id}`);

  };

  return (
    <>
      <div className="container d-flex justify-content-between">
        <h4 style={{ fontWeight: "600" }}>Best seller</h4>
        <h6 className="btn btn-success" style={{ borderRadius: "20px" }}>
          VIEW ALL
        </h6>
      </div>
      <div className="container mt-4">
        <ProductList
          products={bestSellerData}
          handleAddToCart={handleAddToCart}
          gotoPage={gotoPage}
        />
      </div>
      <hr />
    </>
  );
};

export default Bestseller;
