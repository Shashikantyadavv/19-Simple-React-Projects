import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
// import "./style.css";

const Rating = ({ stars }) => {
  const arr = [...Array(stars)];
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseLeave = (index) => {
    setHover(rating);
  };
  const handleMouseMove = (index) => {
    setHover(index);
  };

  return (
    <div className="contianer centered">
      {arr.map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "class1" : "class2"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={50}
          />
        );
      })}
    </div>
  );
};

export default Rating;
