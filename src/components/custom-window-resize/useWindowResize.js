import React, { useEffect, useState } from 'react'

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width:0,
    height:0
  });

  useEffect(() => {
    handleResize();
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  },[])

  const handleResize = () =>{
    setWindowSize({
      width:window.innerWidth,
      height:window.innerHeight
    })
  }

  return windowSize;

}

export default useWindowResize
