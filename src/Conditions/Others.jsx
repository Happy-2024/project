import React, { useContext } from "react";
import Bottle from "../Assests/Bottle.png";
import "./Others.css";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Home/Cartcontext"; // Adjust the path if needed
import ProductList from "../Component/List";
const Others = () => {
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (product) => {
    addToCart(); // This will update cartCount in CartContext
    // localStorage.setItem("product", JSON.stringify(product));
    // sessionStorage.setItem("product", JSON.stringify(product));
  };
  const navigate = useNavigate();
  const gotoPage = (product) => {
    localStorage.setItem("productDetails", product?.product_details?.featured_image);
    localStorage.setItem("salesPrice", product?.product_details?.sales_price);
    navigate(`/product/${product?.products?.id && products?.image}`);

  };

  const products = [
    {
      id: "product-1",
      image: Bottle,
      title:
        "Hibiscus Shampoo With Vitamin C and Vitamin D for Hair care product...",
      description: "Reduces Hair Fall | Strengthens Hair | Softens Hair",
      rating: "4.7",
      reviews: "672",
      price: "243.00",
      oldPrice: "343.00",
      isOthers: false,
    },
    {
      id: "product-2",
      image: Bottle,
      title:
        "Hibiscus Shampoo With Vitamin C and Vitamin D for Hair care product...",
      description: "Reduces Hair Fall | Strengthens Hair | Softens Hair",
      rating: "4.7",
      reviews: "672",
      price: "243.00",
      oldPrice: "343.00",
      isOthers: true,
    },
    {
      id: "product-3",
      image: Bottle,
      title:
        "Hibiscus Shampoo With Vitamin C and Vitamin D for Hair care product...",
      description: "Reduces Hair Fall | Strengthens Hair | Softens Hair",
      rating: "4.7",
      reviews: "672",
      price: "243.00",
      oldPrice: "343.00",
      isOthers: false,
    },
    {
      id: "product-4",
      image: Bottle,
      title:
        "Hibiscus Shampoo With Vitamin C and Vitamin D for Hair care product...",
      description: "Reduces Hair Fall | Strengthens Hair | Softens Hair",
      rating: "4.7",
      reviews: "672",
      price: "243.00",
      oldPrice: "343.00",
      isOthers: true,
    },
  ];

  return (
    <div>
      <h4 className="text-center mt-5">Conditioners & Others</h4>
      <div className="container mt-4">
        <ProductList
          products={products}
          handleAddToCart={handleAddToCart}
          gotoPage={gotoPage}
        />
      </div>
    </div>
  );
};

export default Others;
