import React from "react";
import './HeroSection.css';
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="hero-section">
            <div className="hero-section__info">
                <article>
                    <h1 className="hero-section__title">Little Lemon</h1>
                    <h2 className="hero-section__subtitle">London</h2>
                    <p className="hero-section__details">
                        We are a family-owned Mediterranean restaurant, focusing on traditional recipes served with a modern twist.
                    </p>
                </article>
                <div className="hero-section__button-container">
                    <button
                        className="hero-section__button"
                        onClick={() => {
                            console.log("Navigating to /reservations");
                            navigate("/reservations");
                          }}
                    >
                        Reserve a table
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;