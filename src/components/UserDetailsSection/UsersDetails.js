import React, { useState } from "react";
import './UserDetails.css'
import FooterWhite from '../Footer/FooterWhite.js'
import {useUserDetailsContext} from "../../Context/UserContext.js"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserDetailsForm from "./UserDetailsForm.js";

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
        <div className="user-details-page">
            <div className="user-details-container">
                <div className="title-section">
                    <h1>Little Lemon</h1>
                    <p>London</p>
                </div>
                <div className="booking-details">
                    <UserDetailsForm
                        user={user}
                        handleChangeUser={handleChangeUser}
                        handleSubmit={handleSubmit}
                        userErrors={userErrors}
                    />
                    <div className="booking-summary">
                        <h3 className="booking-summary-title">Booking details</h3>
                        <fieldset className="booking-details-summary">
                            <p>
                                Date: <strong>{values.date}</strong><br />
                                Time: <strong>{values.time}</strong><br />
                                Number of diners: <strong>{values.diners}</strong><br />
                                Occasion: <strong>{values.occasion}</strong><br />
                                Seating: <strong>{values.standard ? "Inside" : "Outside"}</strong>
                            </p>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div className="footer-white">
                <FooterWhite />
            </div>
        </div>
    )
}

