import React from "react";
import './HighlightsSection.css';
import bruschetta from "../../../assets/bruscheta.png";
import greekSalad from "../../../assets/greeksalad.png";
import lemonDessert from "../../../assets/lemondessert.jpg";

function HighlightsSection() {
    const promoCards = [
        {
            img: greekSalad,
            title: "Greek salad",
            price: "$12.99",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        },
        {
            img: bruschetta,
            title: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        },
        {
            img: lemonDessert,
            title: "Lemon dessert",
            price: "$5.00",
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        },
    ];

    return (
        <div className="highlights-section" id="onlineOrders">
            <div className="highlights-section__header">
                <h1 className="highlights-section__title">This Week's Specials!</h1>
                <button className="highlights-section__fake-button">Online Menu</button>
            </div>
            <div className="highlights-section__cards">
                {promoCards.map((promoCard) => (
                    <section key={promoCard.title} className="highlights-section__card">
                        <figure>
                            <img
                                src={promoCard.img}
                                alt={promoCard.title}
                                className="highlights-section__image"
                            />
                            <figcaption>
                                <div className="highlights-section__card-title">
                                    <h1>{promoCard.title}</h1>
                                    <h2>{promoCard.price}</h2>
                                </div>
                                <p className="highlights-section__description">{promoCard.description}</p>
                                <button className="highlights-section__button">
                                    Order delivery <i className="fa-solid fa-bicycle"></i>
                                </button>
                            </figcaption>
                        </figure>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default HighlightsSection;