import React from "react";
import ProductCard from "../Component/Card";

const ProductList = ({ products, handleAddToCart, gotoPage }) => {
  return (
    <div className="row">
      {products?.map(
        (product) => (
         
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              gotoPage={gotoPage}
            />
          
        )
      )}
    </div>
  );
};

export default ProductList;
