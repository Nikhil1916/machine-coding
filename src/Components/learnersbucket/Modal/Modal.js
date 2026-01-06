import React from 'react';
import "./Styles.css"

const Modal = ({show, onClose, children, title}) => {
  return (
    show && <>
        <div className='modal-backdrop' onClick={onClose}></div>
        <div className='modal-wrapper'>

            <div className='modal-content'>
                <div className='modal-header'>
                    <div className='modal-title'>{title}</div>
                    <div className='modal-close' onClick={onClose}>X</div>
                </div>
                <div className='modal-body'>
                    {children}
                </div>
            </div>

        </div>
    </>
  )
}

export default Modal