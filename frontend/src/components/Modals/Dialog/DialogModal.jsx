import React, { useEffect } from 'react'
import './dialogModal.css'
const DialogModal = ({setisDialogModal,isDialogModal}) => {
    useEffect(() => {
        setTimeout(() => {
            setisDialogModal(true)
        },2000)
        clearTimeout()
    },[])
  return (
    <div className={`modal-dialog ${isDialogModal ? 'show' :''}`}>
    <div className="modal-content">
      <button onClick={() => setisDialogModal(false)} className="modal-close">
        <i className="bi bi-x"></i>
      </button>
      <div className="modal-image">
        <img src="/img/modal-dialog.jpg" alt="" />
      </div>
      <div className="popup-wrapper">
        <div className="popup-content">
          <div className="popup-title">
            <h3>NEWSLETTER</h3>
          </div>
          <p className="popup-text">
            Sign up to our newsletter and get exclusive deals you won find any where else straight to your inbox!
          </p>
          <form className="popup-form">
            <input type="text" placeholder="Enter Email Address Here" />
            <button className="btn btn-primary">SUBSCRIBE</button>
            <label>
              <input type="checkbox" />
              <span>Don't show this popup again</span>
            </label>
          </form>
        </div>
      </div>
    </div>
    <div onClick={() => setisDialogModal(false)} className="modal-overlay">

    </div>
  </div> 
  )
}

export default DialogModal