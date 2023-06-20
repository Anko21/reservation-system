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


// import React, { useState } from "react";
// import "./Modal.css";

// export default function Modal() {
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if(modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }

//   return (
//     <>
//       <button onClick={toggleModal} className="btn-modal">
//         Open
//       </button>

//       {modal && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay"></div>
//           <div className="modal-content">
//             <h2>Hello Modal</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
//               perferendis suscipit officia recusandae, eveniet quaerat assumenda
//               id fugit, dignissimos maxime non natus placeat illo iusto!
//               Sapiente dolorum id maiores dolores? Illum pariatur possimus
//               quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
//               placeat tempora vitae enim incidunt porro fuga ea.
//             </p>
//             <button className="close-modal" onClick={toggleModal}>
//               CLOSE
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }