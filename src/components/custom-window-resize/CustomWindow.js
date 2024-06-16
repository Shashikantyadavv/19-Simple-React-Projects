import React from 'react'
import useWindowResize from './useWindowResize';

const CustomWindow = () => {
    const {height, width} = useWindowResize();
  return (
    <div>
        <h1>Custom Window</h1>
        <p>Height: {height}</p>
        <p>Width: {width}</p>
    </div>
  )
}

export default CustomWindow
