import React, { useState } from 'react'
import Modal from './Modal';

const ModalTest = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }
  return (
    <div>
        <button onClick={handleShow}>Modal</button>
        <Modal show={show} onClose={()=>setShow(false)} title="Modal test">
        <h1>Hello From Modal</h1>
        </Modal>
    </div>
  )
}

export default ModalTest