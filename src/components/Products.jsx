import './Products.css';
import { useEffect, useState } from "react";

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
      <h1>Choose your favorite products</h1>

      <article className="container-cards">
        {productsApi.map((product) => (
          <div  className="container-images" key={product.id}>
            <div>
              <img src={product.images[0]} alt="Product image" />
            </div>
            <h2>{product.title}</h2>
            <span className='price'>${product.price}</span> <br />
          <button className="add-button">Add to Cart</button>
          </div>          
        ))}
      </article>
    </>
  );
};

export default Products;
