import React from 'react'
import '../../App.css'
import {useUserDetailsContext} from "../../Context/UserContext"

//Final confirmation-modal
export default function BookingConfirmation() {
  const {values}=useUserDetailsContext();

  return (
    <div className="confirmationPage">
        <h1 className="modal_h1">Little Lemon</h1>
        <h3 className="modal_p">London</h3>
        <p className="modal_p">Your booking is confirmed!!!<br/>
        We are looking forward to see you on <strong>{values.date}</strong> at <strong>{values.time}</strong> !!!<br/>
        Thank you for your reservation!</p>
    </div>
  )
}
