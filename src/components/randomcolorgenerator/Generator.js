import React, { useEffect, useState } from "react";


const Generator = () => {
  const [typeOfColor, setTypeOfColor] = useState("");
  const [color, setColor] = useState("#fff");

  const generateHexColor = () => {
    setColor("#fff");
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
      hexCode += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexCode);
  };

  const generateRGBColor = () => {
    setColor("#fff");
    const a = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const c = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    const color = `rgb(${a},${b},${c})`;
    setColor(color);
  };

  useEffect(() => {
    typeOfColor === "Hex" ? generateHexColor() : generateRGBColor();
  }, [typeOfColor]);

  return (
    <>
      <div className="button-container">
        <button className="color-button" onClick={() => setTypeOfColor("Hex")}>
          Create HEX Color
        </button>
        <button className="color-button" onClick={() => setTypeOfColor("RGB")}>
          Create RGB Color
        </button>
        <button
          className="generate-button"
          onClick={typeOfColor === "Hex" ? generateHexColor : generateRGBColor}
        >
          Generate Random Color
        </button>
      </div>
      <div className="color-display" style={{ backgroundColor: color }}>
        {"         "}
        {color}
      </div>
    </>
  );
};

export default Generator;
