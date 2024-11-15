import React from "react";
import { Routes, Route } from "react-router-dom";
import BookingPage from "../components/BookingForm/BookingPage";
import UsersDetails from "../components/UserDetailsSection/UsersDetails";
import PaymentSection from "../components/PaymentSection/PaymentSection";
import BookingConfirmation from "../components/BookingConfirmation/BookingConfirmation";
import HomePage from "../components/HomePage/HomePage";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/reservations" element={<BookingPage/>} />
      <Route path="/usersDetails" element={<UsersDetails/>} />
      <Route path="/pay" element={<PaymentSection/>} />
      <Route path="/bookingconfirmation" element={<BookingConfirmation/>} />
    </Routes>
  );
};

export default RoutesConfig;