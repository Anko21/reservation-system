import React, { useState } from "react";
import "./PaymentSection.css";
import FooterWhite from "../Footer/FooterWhite";
import Modal from "../../Modals/Modal";
import BookingConfirmation from "../BookingConfirmation/BookingConfirmation";
import { useNavigate } from "react-router-dom";
import { useUserDetailsContext } from "../../Context/UserContext";

function PaymentSection() {
  const { setValues } = useUserDetailsContext();
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    ExpDate: "",
    CVV: "",
  });
  const [cardErrors, setCardErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleChangeCard = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmitCard = (e) => {
    e.preventDefault();
    setCardErrors(validate(cardDetails));
    setIsSubmit(true);
    setCardDetails({
      cardNumber: "",
      cardHolder: "",
      ExpDate: "",
      CVV: "",
    });
  };

  const validate = (details) => {
    const errors = {};
    if (!details.cardNumber) {
      errors.cardNumber = "Card number is required";
    } else if (!/^[0-9]{16}/i.test(details.cardNumber)) {
      errors.cardNumber = "Invalid card number";
    }
    if (!details.cardHolder) {
      errors.cardHolder = "Card holder is required";
    } else if (!/^[a-z ,.'-]+$/i.test(details.cardHolder)) {
      errors.cardHolder = "Invalid name";
    }
    if (!details.ExpDate) {
      errors.ExpDate = "Expiry date is required";
    }
    if (!details.CVV) {
      errors.CVV = "CVV is required";
    } else if (!/^[0-9]{3}$/i.test(details.CVV)) {
      errors.CVV = "Invalid CVV";
    }
    return errors;
  };

  const closePortalHandler = () => {
    setValues({
      date: "",
      time: "",
      diners: "",
      occasion: "",
      standard: false,
      outside: false,
    });
    navigate("/");
  };

  let currentDate = new Date().toJSON().slice(0, 10);

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-title">
          <h1>Little Lemon</h1>
          <p>London</p>
        </div>
        <div className="payment-booking">
          <div className="payment-form">
            <form onSubmit={handleSubmitCard}>
              <h3>Credit Card Details</h3>
              <div className="payment-field">
                <label htmlFor="cardNumber">Card Number *</label>
                <input
                  type="tel"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="xxxx xxxx xxxx xxxx"
                  maxLength="16"
                  value={cardDetails.cardNumber}
                  onChange={handleChangeCard}
                  className="payment-input"
                />
                <span className="payment-error">{cardErrors.cardNumber}</span>
              </div>
              <div className="payment-field">
                <label htmlFor="cardHolder">Card Holder *</label>
                <input
                  type="text"
                  id="cardHolder"
                  name="cardHolder"
                  placeholder="First Name/Last Name"
                  value={cardDetails.cardHolder}
                  onChange={handleChangeCard}
                  className="payment-input"
                />
                <span className="payment-error">{cardErrors.cardHolder}</span>
              </div>
              <div className="payment-cvv-section">
                <div className="payment-field">
                  <label htmlFor="ExpDate">Exp. Date *</label>
                  <input
                    type="date"
                    id="ExpDate"
                    name="ExpDate"
                    min={currentDate}
                    value={cardDetails.ExpDate}
                    onChange={handleChangeCard}
                    className="payment-input"
                  />
                  <span className="payment-error">{cardErrors.ExpDate}</span>
                </div>
                <div className="payment-field">
                  <label htmlFor="CVV">CVV *</label>
                  <input
                    type="tel"
                    id="CVV"
                    name="CVV"
                    placeholder="xxx"
                    maxLength="3"
                    value={cardDetails.CVV}
                    onChange={handleChangeCard}
                    className="payment-input"
                  />
                  <span className="payment-error">{cardErrors.CVV}</span>
                </div>
              </div>
              <div className="payment-confirmation">
                <label htmlFor="textconfirm">
                  Send me a booking confirmation via text
                </label>
                <input type="checkbox" id="textconfirm" name="textconfirm" />
              </div>
              <div className="payment-confirmation">
                <label htmlFor="emailconfirm">
                  Send me a booking confirmation via email
                </label>
                <input type="checkbox" id="emailconfirm" name="emailconfirm" />
              </div>
              <button
                type="submit"
                className="payment-button"
                onClick={() => setIsOpen(true)}
              >
                Proceed with Payment
              </button>
              {Object.keys(cardErrors).length === 0 && isSubmit ? (
                <Modal open={isOpen} onClose={closePortalHandler}>
                  <BookingConfirmation />
                </Modal>
              ) : null}
            </form>
          </div>
        </div>
      </div>
      <div className="footer-white">
        <FooterWhite />
      </div>
    </div>
  );
}

export default PaymentSection;
