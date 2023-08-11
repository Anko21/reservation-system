import React from "react";
import './App.css'
import Header from "./components/HomePage/Header";
import ReserveSection from "./components/BookingPage.js"
import {Routes, Route} from 'react-router-dom';
import PaymentSection from './components/PaymentSection';
import ConfmirmedBooking from './components/BookingConfirmation';
import Home from './components/HomePage/Home'
import UsersDetails from "./components/UsersDetails";

function App() {
  return (
      <main className="container">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/reservations" element={<ReserveSection/>} />
          <Route path="/usersDetails" element={<UsersDetails/>}/>
          <Route path="/pay" element={<PaymentSection/>} />
          <Route path="/bookingconfirmation" element={<ConfmirmedBooking/>}/>
        </Routes>
      </main>
  )
}

export default App;
