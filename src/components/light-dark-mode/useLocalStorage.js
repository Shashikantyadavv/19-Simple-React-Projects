import { useEffect, useState } from "react";

const useLocalStorage = ({ key, defaultValue }) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      console.log(e);
      currentValue = String(defaultValue);
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });
  console.log(setValue);
  return [value, setValue];
};

export default useLocalStorage;
