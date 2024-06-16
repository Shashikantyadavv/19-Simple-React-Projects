import React, { useState } from "react";
import data from "./data";
// import "./style.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [isMultiple, setIsMultiple] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);
  const [text, setText] = useState("Enable");

  // const handleSingleSelection = (id) => {
  //   setSelected(id === selected ? null : id);
  // };

  const handleMultipleSelection = (id) => {
    if (!isMultiple) {
      setSelected(id === selected ? null : id);
    } else {
      let newSelected = [...multipleSelected];
      if (newSelected.find((key) => key === id)) {
        newSelected = newSelected.filter((key) => key !== id);
      } else {
        newSelected = [...multipleSelected, id];
      }
      console.log(newSelected);
      setMultipleSelected(newSelected);
    }
  };

  const enableMultiple = () => {
    setSelected(null);
    setIsMultiple(!isMultiple);
    if (isMultiple) {
      setText("Enable");
      setMultipleSelected([]);
    } else {
      setText("Disable");
    }
  };

  return (
    <>
      <div>
        <button className="toggle-button" onClick={enableMultiple}>
          {isMultiple ? "Disable" : "Enable"} Multiple Selection
        </button>
      </div>
      <div className="wrapper">
        <div className="accordion">
          {data.length > 0 ? (
            data.map((item) => (
              <div key={item.id} className="accordion-item">
                <div
                  className="title"
                  onClick={() => handleMultipleSelection(item.id)}
                >
                  {item.question}
                  <span className="icon">+</span>
                </div>
                {(!isMultiple && selected === item.id) ||
                (isMultiple && multipleSelected.includes(item.id)) ? (
                  <div className="content">{item.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div className="no-data">No data present</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
