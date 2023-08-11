
import React from "react";
import '../../App.css'
import { useNavigate } from "react-router-dom";


function HeroSection(){
    const navigate=useNavigate()
    return(
    <div className="hero" id="hero">
        <div className="heroInfo">
            <section>
                {/* article */}
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="details">We are a family owned Mediterranean restaurant, focus on traditional recipes served in a modern twist.</p>
            </section>
            <div className="reservebtn">
                <button className="reservebtn" onClick={()=> navigate("/reservations")}>Reserve a table</button>
            </div>
        </div>
             {/* <img
             className="heroImg"
            src={restaurantfood}
            alt="Little Lemon logo"
            >
            </img> */}
    </div>
    )
}

export default HeroSection;