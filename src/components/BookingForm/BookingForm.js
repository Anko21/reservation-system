function BookingForm(props) {
    const currentDate = new Date().toJSON().slice(0, 10);

    return (
        <div className="booking-form-page">
            <div className="booking-form">
                <h1 className="booking-form__title">Find your table for any occasion</h1>
                <form onSubmit={props.handleSubmit} className="booking-form__form">

                    <div className="booking-form__field">
                        <label htmlFor="date" className="booking-form__label">Select a date*</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            min={currentDate}
                            value={props.date}
                            onChange={props.handleChange}
                            required
                            className="booking-form__input"
                        />
                    </div>

                    <div className="booking-form__field">
                        <label htmlFor="time" className="booking-form__label">Select a time*</label>
                        <select
                            id="time"
                            name="time"
                            value={props.time}
                            onChange={props.handleChange}
                            required
                            className="booking-form__select"
                        >
                            <option value="" disabled hidden>Time</option>
                            {props.timeSlots.map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                            ))}
                        </select>
                    </div>

                    <div className="booking-form__field">
                        <label htmlFor="diners" className="booking-form__label">Select a number of guests*</label>
                        <select
                            id="diners"
                            name="diners"
                            value={props.diners}
                            onChange={props.handleChange}
                            required
                            className="booking-form__select"
                        >
                            <option value="" disabled hidden>Number of diners</option>
                            <option value="0-2">0-2</option>
                            <option value="2-4">2-4</option>
                            <option value="4-6">4-6</option>
                            <option value="more than 6">More than 6</option>
                        </select>
                    </div>

                    <div className="booking-form__field">
                        <label htmlFor="occasion" className="booking-form__label">Select the occasion*</label>
                        <select
                            id="occasion"
                            name="occasion"
                            value={props.occasion}
                            onChange={props.handleChange}
                            required
                            className="booking-form__select"
                        >
                            <option value="" disabled hidden>Occasion</option>
                            <option value="Dinner">Dinner</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Corporate Dinner">Corporate Dinner</option>
                        </select>
                    </div>

                    <div className="booking-form__field">
                        <h3 className="booking-form__seating-title">Seating options <span className="booking-form__seating-optional">(Optional)</span></h3>
                        <div className="booking-form__seating-options">
                            <div className="booking-form__seating-option">
                                <label htmlFor="standard">Standard</label>
                                <input
                                    type="radio"
                                    id="standard"
                                    name="seating"
                                    value="standard"
                                    onChange={props.radioChange}
                                    className="booking-form__radio"
                                />
                            </div>
                            <div className="booking-form__seating-option">
                                <label htmlFor="outside">Outside</label>
                                <input
                                    type="radio"
                                    id="outside"
                                    name="seating"
                                    value="outside"
                                    onChange={props.radioChange}
                                    className="booking-form__radio"
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="booking-form__button">Make your reservation</button>
                </form>
            </div>
        </div>
    );
}

export default BookingForm;

//formValidation by disabling the button
//disabled={!props.formValidation()}