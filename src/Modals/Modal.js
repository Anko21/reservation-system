import React from 'react'
import "./Modal.css"
import ReactDOM  from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function Modal({open, onClose, children}) {
if (!open)return null

  return ReactDOM.createPortal(
    <>
        <div className='overlay_style' onClick={onClose}>
            <div className='modal_style'>
            <button className='modal_button' onClick={onClose}><FontAwesomeIcon icon={faX} style={{color: "#f4ce14",}} /></button>
                {children}
            </div>
        </div>
    </>,
    document.getElementById('portal')
  )
}

