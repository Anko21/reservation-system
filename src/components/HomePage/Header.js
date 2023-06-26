
import '../../App'
import React from "react";
import logo from "../../assets/logo.png"
import AboutSection from "./AboutSection.js"
import HighlightsSection from './HighlightsSection'
import {Routes, Route, Link} from 'react-router-dom';



function Header(){
    return(
        <div className="header" >
            <Link to="/">
            <img
            src={logo}
            alt="Little Lemon logo"
            width={230}
            id="logo"
            />
            </Link>
            <nav>
                 <ul className="navbar">
                    <Link to="/" className="nav-item">Home </Link>
                    <Link to="/about" className="nav-item" >About</Link>
                    <Link to="/menu" className="nav-item" >Menu</Link>
                    <Link to="/reservations" className="nav-item" >Reservations</Link>
                </ul>
            </nav>
            <Routes>
                  <Route path="/about" element={<AboutSection/>} />
                  <Route path="/menu" element={<HighlightsSection/>}/>

            </Routes>
        </div>
    )
}

export default Header;


// if you prefer a smooth transitionto each section
    //   const handleClick = (anchor) => () => {
    //     const id = `${anchor}`;
    //     const element = document.getElementById(id);
    //     if (element) {
    //       element.scrollIntoView({
    //         behavior: "smooth",
    //         block: "start",
    //       });
    //     }
    //   };
