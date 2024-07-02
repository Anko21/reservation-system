import FooterWhite from './HomePage/FooterWhite.js'
import restaurantchefB from '../assets/restaurantchefB.jpg'
import restaurant from '../assets/restaurant.jpg'

function BookingForm(props){
    let currentDate = new Date().toJSON().slice(0, 10);
    
    return(
        <div className="reservePage">
            <div className="reserve">
                <section className="reserveLeftSide">
                    <h1>Little Lemon</h1>
                    <p>Chicago</p>
                    <img src={restaurantchefB} id="ImgA" alt="chef cooking" ></img>
                    <img src={restaurant} id="ImgB" alt="restaurant's garden"></img>
                </section>
                <div className="reserveForm">
                    <h1>Find your table for any occassion</h1>
                    <form onSubmit={props.handleSubmit}>
                        <div className="selection">
                            <label htmlFor='date' className='userDetailsForm'>Select a date*</label>
                            <input
                            type="date"
                            onFocus={(e) => (e.target.type = "date")}
                            id="date"
                            name='date'
                            min={currentDate}
                            value={props.date}
                            onChange={props.handleChange}
                            required
                            />
                        </div>
                        <div className="selection">
                        <label htmlFor='date' className='userDetailsForm'>Select a time*</label>
                            <select
                            id="time"
                            name="time"
                            value={props.time}
                            onChange={props.handleChange}
                            required
                            >
                                <option value="" disabled selected hidden>Time</option>
                                {props.timeSlots.map((time,index)=>(
                                    <option key={index} style={{color:"black"}}>
                                        {time}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="selection">
                        <label htmlFor='date' className='userDetailsForm'>Select a number of guests* </label>
                            <select
                            id="diners"
                            name="diners"
                            value={props.diners}
                            onChange={props.handleChange}
                            required
                            >
                                <option value="" disabled selected hidden >Number of diners</option>
                                <option value="0-2">0-2</option>
                                <option value="2-4">2-4</option>
                                <option value="4-6">4-6</option>
                                <option value="more than 6">more than 6</option>
                            </select>
                        </div>
                        <div className="selection">
                        <label htmlFor='date' className='userDetailsForm'>Select the occasion*</label>
                            <select
                            id="occasion"
                            name="occasion"
                            value={props.occasion}
                            onChange={props.handleChange}
                            required
                            >
                                <option value="" disabled selected hidden >Occasion</option>
                                <option value="Dinner">Dinner</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Coorporate dinner">Coorporate dinner</option>
                            </select>
                        </div>
                        <div className="selection">
                            <h3>Seating options <span style={{fontWeight:"normal", fontSize:"12px",}}>(Optional)</span></h3>
                            <div className="seatingradio">
                                <section className="seatin">
                                    <label htmlFor="standard">Standard</label>
                                    <input
                                    type="radio"
                                    id="standard"
                                    name="seating"
                                    value={props.standard}
                                    onChange={props.radioChange}
                                    /> <br/>
                                </section>
                                <section className="seatout">
                                    <label htmlFor="outside"> Outside&nbsp;&nbsp;</label>
                                    <input
                                    type="radio"
                                    id="outside"
                                    name="seating"
                                    value={props.outside}
                                    onChange={props.radioChange}
                                    /> <br/>
                                </section>
                            </div>
                        </div>
                        <button type="submit" className="reserveformButton">Make your reservation</button>
                    </form>
                </div>
            </div>
            <div className="footeWhite"><FooterWhite/></div>
        </div>
    )
}

export default BookingForm;

//formValidation by disabling the button
//disabled={!props.formValidation()}