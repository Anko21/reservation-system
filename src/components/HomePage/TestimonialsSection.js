import React from "react";
import '../../App.css'
import testimonial from "../../assets/testimonial.png"
import testimonial1 from "../../assets/testimonial1.png"
import testimonial2 from "../../assets/testimonial2.png"
import testimonial3 from "../../assets/testimonial3.png"
import testimonial4 from "../../assets/testimonial4.png"
import testimonial5 from "../../assets/testimonial5.png"
import testimonial6 from "../../assets/testimonial6.png"
import testimonial7 from "../../assets/testimonial7.png"

function TestimonialsSection(){
    const reviewStar=testimonial
    const testimonials=[
        {
        name: "John Green",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus.",
        src: testimonial1 ,
        alt:"customer 1"
        },
        {
        name: "Anna Granco",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial2,
        alt:"customer 2",
        },
        {
        name: "George Petersen",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial3,
        alt:"customer 3"
        },
        {
        name: "Kate Whithersoon",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial4,
        alt:"customer 4"
        },
        {
        name: "Anna Acaster",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial5,
        alt:"customer 5"
        },
        {
        name: "Bob Mertz",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial6,
        alt:"customer 6"
        },
        {
        name: "Helen Tailoro",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial7,
        alt:"customer 7"
        },
        {
        name: "John Green",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus.",
        src: testimonial1 ,
        alt:"customer 1"
        },
        {
        name: "Anna Granco",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial2,
        alt:"customer 2",
        },
        {
        name: "George Petersen",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial3,
        alt:"customer 3"
        },
        {
        name: "Kate Whithersoon",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial4,
        alt:"customer 4"
        },
        {
        name: "Anna Acaster",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial5,
        alt:"customer 5"
        },
        {
        name: "Bob Mertz",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial6,
        alt:"customer 6"
        },
        {
        name: "Helen Tailoro",
        comments:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rhoncus ligula ut dictum rhoncus." ,
        src: testimonial7,
        alt:"customer 7"
        },
    ]
    return(
        <div  className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="testicards">
                    {testimonials.map((testimonial)=>(
                        <section key={testimonial.name}>
                            <div className="testititle">
                                <h1>Review:</h1> 
                                <div className="star">
                                    <img src={reviewStar} alt="review star"></img>
                                    <img src={reviewStar} alt="review star"></img>
                                    <img src={reviewStar} alt="review star"></img>
                                    <img src={reviewStar} alt="review star"></img>
                                    <img src={reviewStar} alt="review star"></img> 
                                </div>
                            </div>
                            <div className="testicustomer">
                                <img src={testimonial.src} alt={testimonial.alt}></img>
                                <h2>{testimonial.name}</h2>
                            </div>
                            <p>{testimonial.comments}</p>
                       </section>
                                )
                    )}
            </div>
        </div>
    )
}

export default TestimonialsSection;
