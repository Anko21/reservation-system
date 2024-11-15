import React from "react";
import './Footer.css';
import logofooterwhite from "../../assets/logofooterwhite.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

function FooterWhite() {
    const socials = [
        {
            icon: faEnvelope,
            url: "mailto: hello@example.com",
        },
        {
            icon: faFacebook,
            url: "https://facebook.com",
        },
        {
            icon: faInstagram,
            url: "https://www.instagram.com",
        },
        {
            icon: faTiktok,
            url: "https://www.tiktok.com",
        },
    ];

    const handleClick = () => {};

    return (
        <footer className="footer footer--white">
            <img
                src={logofooterwhite}
                alt="Little Lemon logo"
                className="footer__logo"
            />
            <div className="footer__info">
                <ul className="footer__nav">
                    <li className="footer__nav-title"><strong>Doormat Navigation</strong></li>
                    <li><a href="/" onClick={handleClick} className="footer__nav-link">Home</a></li>
                    <li><a href="/reservations" onClick={handleClick} className="footer__nav-link">Reservations</a></li>
                </ul>
                <ul className="footer__contact">
                    <li className="footer__contact-title"><strong>Contact Details</strong></li>
                    <li className="footer__contact-item">Phone: 07546854669</li>
                    <li className="footer__contact-item">Email: LittleLemon@hotmail.com</li>
                </ul>
                <ul className="footer__socials">
                    <li className="footer__socials-title"><strong>Social Media</strong></li>
                    <li>
                        {socials.map(({ url, icon }) => (
                            <a key={url} href={url} className="footer__social-link">
                                <FontAwesomeIcon icon={icon} size="2x" />
                            </a>
                        ))}
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default FooterWhite;