import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
// import "./style.css";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [slider, setSlider] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=10"
      );
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleSlider = (direction) => {
    if (direction < 0) {
      setSlider(slider === 0 ? images.length - 1 : slider - 1);
    } else {
      setSlider(slider === images.length - 1 ? 0 : slider + 1);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : error ? (
        <div className="error">
          <h1>Error: {error}</h1>
        </div>
      ) : !loading && images && images.length > 0 ? (
        <div className="container">
          <BsArrowLeftCircleFill
            className="arrow arrow-left"
            onClick={() => handleSlider(-1)}
          />
          {images.map((item, index) => (
            <img
              src={item.download_url}
              alt={item.author}
              className={
                slider === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
              key={item.id}
            />
          ))}

          <BsArrowRightCircleFill
            className="arrow arrow-right"
            onClick={() => handleSlider(1)}
          />
          <span className="circle-indicators">
            {images && images.length
              ? images.map((_, index) => {
                 return <button key={index} className= {slider=== index ?"current-indicator" : " current-indicator inactive-indicator"}></button>;
                })
              : null}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default ImageSlider;
