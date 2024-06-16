import React, { useEffect } from 'react'

const useOutside = (ref, handler) => {
    useEffect(() => {
        const handleClick = (e) => {
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handler(e);
        }
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick)
            document.removeEventListener('touchstart', handleClick);
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default useOutside
