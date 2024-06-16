import React, { useEffect, useState } from "react";
// import "./style.css";

const Scroll = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=200");
    const data = await response.json();
    setData(data);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    setLoading(true);
    try {
      fetchData();
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <>
      {
        <div className="top-container">
          <h1>Custom Scroll Indicator</h1>
          <div className="scroll-indicator">
            <div
              className="scroll-indicator-bar"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>
      }
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!loading && !error && data.products && (
        <div>
          {data.products.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Scroll;
