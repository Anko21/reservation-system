
import '../../App'
import React from "react";
import logo from "../../assets/logo.png"
import {Link} from 'react-router-dom';

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
                    <Link to="/reservations" className="nav-item" >Reservations</Link>
                </ul>
            </nav>
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
