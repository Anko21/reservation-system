import React, { useState } from "react";
import '../App.css'
import FooterWhite from './HomePage/FooterWhite.js'
import Modal from "./Modals/Modal";
import BookingConfirmation from "./BookingConfirmation";
import { useNavigate } from "react-router-dom";
import {useUserDetailsContext} from "./Context/UserContext"

function PaymentSection(){
    const {setValues}=useUserDetailsContext();
    const [cardDetails,setCardDetails]=useState({
        cardNumber:'',
        cardHolder:'',
        ExpDate:'',
        CVV:''
        })
    const [cardErrors,setCardErrors]=useState({});

    const [isSubmit,setIsSubmit]=useState(false)
    const [isOpen,setIsOpen]=useState(false)
    const navigate=useNavigate()

    const handleChangeCard=(e)=>{
        setCardDetails({...cardDetails, [e.target.name]: e.target.value})
    }
    const handleSubmitCard=(e)=>{
        e.preventDefault();
        setCardErrors(validate(cardDetails));
        setIsSubmit(true);
        setCardDetails({
            cardNumber:'',
            cardHolder:'',
            ExpDate:'',
            CVV:''
        })
    }

    const validate = (details) => {
        const errors = {};
        if (!details.cardNumber) {
        errors.cardNumber = 'Card number is required';
        } else if (!/^[0-9]{16}/i.test(cardDetails.cardNumber)) {
        errors.cardNumber = 'Invalid card number';
        }
        if (!details.cardHolder) {
        errors.cardHolder = 'Card holder is required';
        }else if ((!/^[a-z ,.'-]+$/i.test(cardDetails.cardHolder))){
        errors.cardHolder = 'Invalid name';
        }
        if (!details.ExpDate) {
        errors.ExpDate = 'Expiry date is required';
        }
        if (!details.CVV) {
        errors.CVV = 'CVV is required';
        } else if (!/^[0-9]{3}/i.test(cardDetails.CVV)) {
        errors.CVV = 'Invalid CVV';
        }
        return errors;
    };

    const closePortalHandler=()=>{
        setValues({
            date:"",
            time:"",
            diners:"",
            occasion: "",
            standard:false,
            outside:false,
        })
        navigate("/")
    }

    let currentDate = new Date().toJSON().slice(0, 10);

    return (
        <div className="paymentPage">
            <div className="payment">
                <div className="payTitle">
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                </div>
                <div className="paybooking">
                    <div className="payform">
                        <form onSubmit={handleSubmitCard}>
                            <h3>Credit Card details</h3>
                            <div className="payfield">
                                <label htmlFor="cardNumber">Card number * </label>
                                <input
                                    type="tel"
                                    id="cardNumber"
                                    name="cardNumber"
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    maxLength="16"
                                    value={cardDetails.cardNumber}
                                    onChange={handleChangeCard}
                                />
                                <span>{cardErrors.cardNumber}</span><br/>
                            </div>
                            <div className="payfield">
                                <label htmlFor="cardHolder">CardHolder*</label>
                                <input
                                    type="text"
                                    id="cardHolder"
                                    name="cardHolder"
                                    placeholder="*First Name/Last Name"
                                    value={cardDetails.cardHolder}
                                    onChange={handleChangeCard}
                                />
                                <span>{cardErrors.cardHolder}</span><br/>
                            </div>
                            <div className="paycvv">
                                <div className="payfield">
                                    <label htmlFor="ExpDate">Exp. Date*</label>
                                    <input
                                    type="date"
                                    id="ExpDate"
                                    name="ExpDate"
                                    placeholder="*MM/YY"
                                    min={currentDate}
                                    value={cardDetails.ExpDate}
                                    onChange={handleChangeCard}
                                    />
                                <span>{cardErrors.ExpDate}</span><br/>
                                </div>
                                <div className="payfield">
                                    <label htmlFor="CVV">CVV*</label>
                                    <input
                                    type="tel"
                                    id="CVV"
                                    name="CVV"
                                    placeholder="xxx"
                                    maxLength="3"
                                    value={cardDetails.CVV}
                                    onChange={handleChangeCard}
                                    />
                                <span>{cardErrors.CVV}</span><br/>
                                </div>
                                </div>
                                <div  className="payconf">
                                    <label htmlFor="textconfirm">Send me a booking confirmation via text&nbsp; &nbsp;&nbsp; &nbsp;  </label>
                                    <input type="checkbox" id="textconfirm" name="textconfirm" value="textconfirm"/>
                                </div>
                                <div className="payconf">
                                    <label htmlFor="emailconfirm">Send me a booking confirmation via email&nbsp; &nbsp; </label>
                                    <input type="checkbox" id="emailconfirm" name="emailconfirm" value="emailconfirm"/>
                                </div>
                                <button type="submit" className="payButton" onClick={()=>setIsOpen(true)}>Procced with the Payment</button>
                                {(Object.keys(cardErrors).length===0 && isSubmit)?
                                <Modal open={isOpen} onClose={closePortalHandler}>
                                    <BookingConfirmation/>
                                </Modal>: null}
                            </form>

                    </div>
                </div>
            </div>
            <div className="footeWhite"><FooterWhite/></div>
        </div>
    )
}

export default PaymentSection;
