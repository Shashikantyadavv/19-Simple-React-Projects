import React from 'react'
// import "./style.css"

const Modal = ({onClose,id, header, body, footer}) => {

  return (
    <div id={id || "Modal"} className='modal'>
        <div className="modal-content">
            <div className="header">
                <span className="close-modal-icon"  onClick={onClose}>
                    &times;
                </span>
                    <h2>{header ?header : 'Header'}</h2>
            </div>
            <div className="body">
                <h2>{body ?body : 'Body'}</h2>
            </div>
            <div className="footer">
                <h2>{footer?footer : 'Footer'}</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Modal
