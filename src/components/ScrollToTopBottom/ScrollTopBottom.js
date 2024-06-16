import React from "react";
import useFetch from "../cutom-hooks/useFetch";

const ScrollTopBottom = () => {
  const { data, loading, error } = useFetch(
    fetch ? "https://dummyjson.com/products" : null,
    {}
  );
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <h1>ScrollTopBottom</h1>
      <h3>This is Top Section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {data &&
        data.products &&
        data.products.length > 0 &&
        data.products.map((item) => <h3 key={item.id}>{item.title}</h3>)}
      <h3>This is Bottom Section</h3>
      <button onClick={handleScrollToTop}>Scroll To Top</button>
    </div>
  );
};

export default ScrollTopBottom;
