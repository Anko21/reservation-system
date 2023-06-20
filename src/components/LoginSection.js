import React from "react";
import '../App.css'
import FooterWhite from './HomePage/FooterWhite.js'
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginSection(){
    const navigate=useNavigate()

    const [user,setUser]=useState(
        {firstname:"",
        lastname:"",
        phone:"",
        email:"",
        password:"",
        comments:"",
        })
//console.log(user,setUser);
    const [userErrors,setUseErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false)

    const handleSubmitLogin=(e)=>{
        e.preventDefault();
        navigate("/")
     }

    const handleChangeSignUp=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
     };
     const handleSubmitSignUp=(e)=>{
        e.preventDefault();
        setUseErrors(validate(user));
        setIsSubmit(true);
     }
     const validate = (values) => {
        const errors = {};
        if (!values.firstname) {
          errors.firstname = 'First name is required!';
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
      };

      useEffect(()=>{
        //console.log(userErrors)
        if(Object.keys(userErrors).length===0 && isSubmit){
        navigate("/pay")
        }
     },[userErrors])

    return (
        <div className="loginPage">
            <div className="loginSignup">
                <section className="loginTitle">
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                </section>
                <div className="clientForms">
                    <div className="signup">
                        <form onSubmit={handleSubmitSignUp}> 
                            <h2>Please fill the details below,&nbsp; to create an account.
                            </h2>
                            <div className="signupcouples">
                                <div className="signupfield">
                                    <label htmlFor="firstname">*First name</label><br/>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="User's first name"
                                        value={user.firstname}
                                        onChange={handleChangeSignUp}
                                    /><br/>
                                    <span>{userErrors.firstname}</span><br/> 
                                </div>
                                <div className="signupfield">
                                    <label htmlFor="lastname">*Last name</label><br/>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        placeholder="User's last name"
                                        value={user.lastname}
                                        onChange={handleChangeSignUp}
                                    /><br/>
                                    <span>{userErrors.lastname}</span><br/>
                                </div>
                            </div>
                            <div className="signupcouples">
                                <div className="signupfield">
                                    <label htmlFor="phone">*Phone number</label><br/>
                                    <input 
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="123456789"
                                        value={user.phone}
                                        onChange={handleChangeSignUp}
                                    /><br/>
                                    <span>{userErrors.phone}</span><br/>
                                </div>
                                <div className="signupfield">
                                    <label htmlFor="email">*Email</label><br/>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="useraddress@email.com"
                                        value={user.email}
                                        onChange={handleChangeSignUp}
                                    /><br/>
                                    <span>{userErrors.email}</span><br/>
                                </div>
                            </div>
                            <label htmlFor="password">*Password</label><br/>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="*Password"
                                value={user.password}
                                onChange={handleChangeSignUp}
                             /><br/>
                            <span>{userErrors.password}</span><br/>
                            <textarea
                                name="comments"
                                rows="4"
                                cols="40"
                                maxLength={250}
                                placeholder="*Add a special request(optional)"
                                value={user.comments}
                                onChange={handleChangeSignUp}
                             ></textarea><br/>
                            <button type="submit" className="signLogButton">Sign up</button>
                        </form>
                    </div>
                    {/* <div className="login">
                        <form onSubmit={handleSubmitLogin}>
                            <h2>Or, &nbsp; if you are already a customer, please log in!</h2>
                            <div className="logincouples">
                                <div className="loginfields">
                                    <label htmlFor="loginemail">Please enter your email</label><br/>
                                    <input
                                        type="email"
                                        id="loginemail"
                                        name="loginemail"
                                        placeholder="useraddress@email.com"
                                    /><br/>
                                </div>
                                <div className="loginfields">
                                    <label htmlFor="loginpassword">Please enter your passsword</label><br/>
                                    <input
                                        type="password"
                                        id="loginpassword"
                                        name="loginpassword"
                                        placeholder="Password"
                                    /><br/>
                                </div>
                            </div>
                            <button type="submit" className="signLogButton">Login</button>
                        </form>
                    </div> */}
                </div>
            </div>
            <div className="footeWhite"><FooterWhite/></div>
        </div>
    )}

export default LoginSection;
