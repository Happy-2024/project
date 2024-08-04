import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Home/Cartcontext";
import ProductList from "../Component/List";
import apiRequest from "../API/Api";

const CategoryList = () => {
  const [productsByCategory, setProductsByCategory] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const fetchProducts = async () => {
    try {
      const requestData = {
        category_type: "NORMAL",
      };
      const response = await apiRequest(
        "category_wise_product",
        requestData,
        "CAT"
      );

      if (response.success) {
        return response.category_wise_products || [];
      } else {
        alert("Error fetching category-wise products");
        return [];
      }
    } catch (error) {
      alert("Error fetching data:", error.message);
      console.error(error);
      return [];
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProductsByCategory(products);
    };

    loadProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const gotoPage = (product) => {
    localStorage.setItem("productDetails", product?.product_details?.featured_image);
    localStorage.setItem("salesPrice", product?.product_details?.sales_price);
    navigate(`/product/${product?.product_details?.id}`);
  };

  return (
    <div className="container">
      {productsByCategory.length > 0 ? (
        productsByCategory.slice(0, 6).map((category) => (
          <div key={category.id}>
            <div className="container d-flex justify-content-between mt-4">
              <h4 style={{ fontWeight: "600" }}>{category.category_name}</h4>
              <h6 className="btn btn-success" style={{ borderRadius: "20px" }}>
                VIEW ALL
              </h6>
            </div>
            <div className="container mt-4">
              <ProductList
                products={category?.category_mapping
                  ?.slice(0, 4)
                  .map((item) => ({
                    ...item,
                    isBestseller: category.category_name === "Best Sellers",
                    isBestseller: category.category_name === "Body Care",
                    isBabycare: category.category_name === "Baby Care",
                    isEyecare: category.category_name === "Eye Care",
                    isFacecare: category.category_name === "Face Care",
                    isHaircare: category.category_name === "Hair Care",
                    isNewArrival: category.category_name === "New Arrivals",
                    isNewArrival: category.category_name === "Health Care",
                    isOthers: category.category_name === "Others",
                  }))}
                handleAddToCart={handleAddToCart}
                gotoPage={gotoPage}
              />
            </div>
            <hr />
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default CategoryList;
