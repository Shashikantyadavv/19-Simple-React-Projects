import React, { useState, useEffect } from "react";
// import "./style.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchMore = async (count) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchMore(count);
  }, [count]);

  return (
    <div className="container">
      {loading && <p>Product are Loading ....</p>}
      <div className="product-container">
        {!loading && products
          ? products.map((item) => (
              <div key={item.id} className="product">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Load more Products</button>
      </div>
    </div>
  );
};

export default LoadMore;
