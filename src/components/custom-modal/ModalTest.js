import React, {useState} from 'react'
import Modal from './Modal'


const ModalTest = () => {

    const [showModal, setShowModal] = useState(false)
    const handleToggleModal = () => {
        setShowModal(!showModal);
        console.log(showModal);
    }
    const onClose = () => {
      setShowModal(false);
    }

  return (
    <div>
      <button onClick={handleToggleModal}>Open Custom Modal</button>
      {
        showModal && <Modal onClose={onClose}/>
      }
    </div>
  )
}

export default ModalTest
