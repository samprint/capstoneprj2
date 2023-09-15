

const BookingForm = () => {
    return(
        <div className="bookingform">
            <div className="form">
                <form>
                    <div className="datetime">
                        <div className="date">
                            <fieldset>
                                <label for="res-date" >Choose date</label>
                                <input type="date" id="res-date" className="input-box"/>
                            </fieldset>
                        </div>
                        <div className="time">
                            <fieldset>
                                <label for="res-time">Choose time</label>
                                <select id="res-time" className="input-box">
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option>
                                </select>
                            </fieldset>
                        </div>
                    </div>
                    <div className="guests">
                        <fieldset>
                            <label for="guests">Number of guests</label>
                            <input 
                                type="number" 
                                placeholder="1" 
                                min="1" 
                                max="10" 
                                id="guests"
                                className="input-box"
                            />
                        </fieldset>
                    </div>
                    <div className="occasion">
                        <fieldset>
                            <label for="occasion">Occasion</label>
                            <select id="occasion" className="input-box">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </fieldset>
                    </div>
                    <input type="submit" value="Make Your reservation"/>
                </form>
            </div>
        </div>
    );

};

export default BookingForm;