import React, { useState } from "react";
import '../App.css'
import FooterWhite from './HomePage/FooterWhite.js'
import {useUserDetailsContext} from "./Context/UserContext"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//This component contains the contact details for the reservation and a booking summary

export default function UsersDetails() {
    const {values}=useUserDetailsContext();
    const navigate=useNavigate()

    const [user,setUser]=useState(
        {name:"",
        phone:"",
        email:"",
        comments:"",
        })
    const [userErrors,setUserErrors]=useState({});

    const [isSubmit,setIsSubmit]=useState(false)

    const handleChangeUser=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
     };
     const handleSubmit=(e)=>{
        e.preventDefault();
        setUserErrors(validate(user));
        setIsSubmit(true);
     }
     const validate = (values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'A name is required!';
        }
        if (!values.phone) {
            errors.phone = 'Phone number is required!';
          } else if (!/^[+][0-9]{10,16}|[0-9]{10,16}|[+][0-9]{2}[(][0-9]{1}[)][0-9]{10,16}$/i.test(user.phone)) {
            errors.phone = 'Invalid phone!';
          }
        if (!values.email) {
          errors.email = 'Email is required!';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user.email)) {
          errors.email = 'Invalid email address!';
        }
        return errors;
      };

      useEffect(()=>{
        if(Object.keys(userErrors).length===0 && isSubmit){
        navigate("/pay")
        }
     },[userErrors])

  return (
    <div className="userDetailsPage">
        <div className="userDetails">
            <div className="tittleRow1">
                <h1>Little Lemon</h1>
                <p>Chicago</p>
            </div>
            <div className="bookingDetails">
                <div className="confirmedDetails">
                    <h3>Booking details</h3>
                        <fieldset className="bookingConfDetails">
                            <p>
                                Date:<strong>{values.date}</strong><br/>
                                Time: <strong>{values.time}</strong><br/>
                                Number of diners: <strong>{values.diners}</strong><br/>
                                Ocassion: <strong>{values.occasion}</strong><br/>
                                Seating: <strong>{values.standard?"Inside":"Outside"}</strong>
                            </p>
                        </fieldset>
                </div>
                <div className="userDetailsForm">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">*Name</label><br/>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="user"
                                value={user.name}
                                onChange={handleChangeUser}
                            /><br/>
                            <span>{userErrors.name}</span><br/>
                        </div>
                        <div>
                            <label htmlFor="phone">*Phone number</label><br/>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="123456789"
                                value={user.phone}
                                onChange={handleChangeUser}
                            /><br/>
                            <span>{userErrors.phone}</span><br/>
                        </div>
                        <div>
                            <label htmlFor="email">*Email</label><br/>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="useraddress@email.com"
                                value={user.email}
                                onChange={handleChangeUser}
                            /><br/>
                            <span>{userErrors.email}</span><br/>
                        </div>
                        <textarea
                            name="comments"
                            rows="3"
                            cols="10"
                            maxLength={250}
                            placeholder="Add any allergies/special request etc. regarding your booking"
                            value={user.comments}
                            onChange={handleChangeUser}>
                        </textarea><br/>
                        <button type="submit">Reserve a table</button>
                    </form>
                </div>
            </div>
        </div>
    <div className="footeWhite"><FooterWhite/></div>
    </div>
    )}

