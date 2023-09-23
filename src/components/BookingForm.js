import ConfirmPage from "./ConfirmPage"
import {useState} from "react";
import {
    Link,
    Route,
    Routes
} from "react-router-dom";

const BookingForm = ({
    updateTimes,
    availableTimes,
    date,
    setDate,
    time,
    setTime,
    guestsNumber,
    setGuestsNumber,
    occasion,
    setOccasion
    }) => {

    const clearForm = () => { 
      };     

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert("Account created!"); 
        clearForm(); 
      }; 

    return(
        <>
            <div className="bookingform">
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="datetime">
                            <div className="date">
                                <fieldset>
                                    <label for="res-date" >Choose date</label>
                                    <input 
                                        type="date" 
                                        id="res-date" 
                                        className="input-box"
                                        value={date}
                                        onChange={(e) =>{
                                            setDate(e.target.value)
                                            updateTimes()
                                        }}
                                    />
                                </fieldset>
                            </div>
                            <div className="time">
                                <fieldset>
                                    <label for="res-time">Choose time</label>
                                    <select 
                                        id="res-time" 
                                        className="input-box"
                                        value={time}
                                        onChange={(e) =>{
                                            // updateTimes()
                                            setTime(e.target.value)
                                        }}
                                    >
                                        {availableTimes.filter((slot)=> slot.available ).map((obj) => (
                                        // {availableTimes.map((obj) => (
                                            <option>{ obj.time}</option>
                                            // <option>{ obj.available ? obj.time: "Filled"}</option>
                                        ))}
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
                                    value={guestsNumber}
                                    onChange={(e) =>{
                                        setGuestsNumber(e.target.value)
                                    }}
                                />
                            </fieldset>
                        </div>
                        <div className="occasion">
                            <fieldset>
                                <label for="occasion">Occasion</label>
                                <select 
                                    id="occasion" 
                                    className="input-box"
                                    value={occasion}
                                    onChange={(e) =>{
                                        setOccasion(e.target.value)
                                    }}
                                >
                                    <option>Birthday</option>
                                    <option>No Occasion</option>
                                    <option>Anniversary</option>
                                </select>
                            </fieldset>
                        </div>
                        <input type="submit" value="Make Your reservation"/>
                    </form>
                </div>
            </div>
            <div>
                <Link to="confirmpage">
                    <button>Next</button>
                </Link>
            </div>
        </>
    );

};

export default BookingForm;