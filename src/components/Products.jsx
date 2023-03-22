import './Products.css';
import React, { useEffect, useState } from "react";

const Products = () => {
  const [productsApi, setProductsApi] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProductsApi(data.products);
      });
  }, []);

  return (
    <>
      <h1>productos</h1>

      <article className="container-cards">
        {productsApi.map((product) => (
          <div key={product.id}>
            <div>
              <img src={product.images[0]} alt="Product image" />
            </div>
            <h2>{product.title}</h2>
            <span>{product.price}</span>
          </div>
        ))}
      </article>
    </>
  );
};

export default Products;
