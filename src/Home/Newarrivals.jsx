import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Home/Cartcontext";
import ProductList from "../Component/List";
// import Bottle from '../Assets/Bottle.png';
import apiRequest from "../API/Api";

const NewArrival = () => {
  const [newArrivalData, setNewArrivalData] = useState([]);

  const fetchNewArrivalData = async () => {
    try {
      const requestData = {
        user_id: 1,
      };
      const response = await apiRequest("new_arrival", requestData, "NEW");
      if (response.success) {
        const fetchedNewArrivalData = response.new_arrival
          .slice(0, 4)
          .map((seller) => {
            const { product_details } = seller;
            return {
              id: product_details.id,
              image: product_details.featured_image,
              title: product_details.product_name,
              description: product_details.meta_description,
              rating: product_details.avg_rating || "No ratings",
              reviews: product_details.review_count,
              price:
                product_details.sales_price || product_details.regular_price,
              oldPrice: product_details.regular_price,
              isNewArrival: true, // Set based on your criteria
            };
          });
        setNewArrivalData(fetchedNewArrivalData);
      } else {
        alert("Failed to fetch new arrival data");
      }
    } catch (error) {
      alert("Error fetching data: " + error.message);
    }
  };

  useEffect(() => {
    fetchNewArrivalData();
  }, []);

  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);

    // localStorage.setItem("product", JSON.stringify(product));
  };

  const gotoPage = (product) => {
    localStorage.setItem("productDetails", product?.image);
    localStorage.setItem("salesPrice", product?.price);
    navigate(`/product/${product?.id}`);

  };

  return (
    <>
      <div className="container d-flex justify-content-between mt-4">
        <h4 style={{ fontWeight: "600" }}>New Arrivals</h4>
        <h6 className="btn btn-success" style={{ borderRadius: "20px" }}>
          VIEW ALL
        </h6>
      </div>
      <div className="container mt-4">
        <ProductList
          products={newArrivalData}
          handleAddToCart={handleAddToCart}
          gotoPage={gotoPage}
        />
      </div>
      <hr />
    </>
  );
};

export default NewArrival;
