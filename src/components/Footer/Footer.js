import React from "react";
import './Footer.css';
import logofooter from "../../assets/logofooter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

function Footer() {
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

    return (
        <footer className="footer">
            <img
                src={logofooter}
                alt="Little Lemon logo"
                className="footer__logo"
            />
            <div className="footer__info">
                <ul className="footer__nav">
                    <li className="footer__nav-title"><strong>Doormat Navigation</strong></li>
                    <li><a href="/" className="footer__nav-link">Home</a></li>
                    <li><a href="/reservations" className="footer__nav-link">Reservations</a></li>
                </ul>
                <ul className="footer__contact">
                    <li className="footer__contact-title"><strong>Contact Details</strong></li>
                    <li className="footer__contact-item">Phone: 07546854669</li>
                    <li className="footer__contact-item">Email: littlelemon@hotmail.com</li>
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

export default Footer;
