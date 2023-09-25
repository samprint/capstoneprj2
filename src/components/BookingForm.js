import ConfirmPage from "./ConfirmPage"
import {useState} from "react";
import {
    Link,
    Route,
    Routes
} from "react-router-dom";

const BookingForm = ({
    availableTimes,
    dispatch,
    date,
    setDate,
    time,
    setTime,
    guestsNumber,
    setGuestsNumber,
    occasion,
    setOccasion,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    }) => {

    // Validation states and functions
    const dateValid = (x) => { return ( x ) };
    const guestsNumberValid = (x) => { return ( (x > 0 && x < 11) ) };
    const firstNameValid = (x) => { return ( x.length > 2 ) };
    const lastNameValid = (x) => { return ( x.length > 2 ) };
    const emailValid = (x) => { return ( (x.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) ) };
    const phonelValid = (x) => { return ( (x.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) ) };

    const [ dateIsTouched, setDateIsTouched ] = useState( false );
    const [ guestsNumberIsTouched, setGuestsNumberIsTouched ] = useState( false );
    const [ firstNameIsTouched, setFirstNameIsTouched ] = useState( false );
    const [ lastNameIsTouched, setLastNameIsTouched ] = useState( false );
    const [ emailIsTouched, setEmailIsTouched ] = useState( false );
    const [ phoneIsTouched, setPhoneIsTouched ] = useState( false );

    const getIsFormValid = () => { 
        return ( 
            dateValid(date) 
            && 
            guestsNumberValid(guestsNumber)
            &&
            firstNameValid(firstName)
            &&
            lastNameValid(lastName)
            &&
            emailValid(email)
            &&
            phonelValid(phone) 
        ); 
      };     

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
                    <form 
                        id="formInfo"
                        onSubmit={handleSubmit}
                    >
                        <div className="datetime">
                            <div className="date">
                                <fieldset>
                                    <label htmlFor="res-date" >Choose date</label>
                                    <input 
                                        type="date" 
                                        id="res-date" 
                                        className="input-box"
                                        required
                                        value={date}
                                        onChange={(e) =>{
                                            setDate(e.target.value)
                                            dispatch({type: 'Change date'})
                                        }}
                                        onBlur={() => { setDateIsTouched(true)}}    
                                    />
                                    <div className="validationerror">{!dateValid(date) && dateIsTouched ? "Choose a date": null}</div>
                                </fieldset>
                            </div>
                            <div className="time">
                                <fieldset>
                                    <label htmlFor="res-time">Choose time</label>
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
                                            <option key={obj.id}>{ obj.time}</option>
                                            // <option>{ obj.available ? obj.time: "Filled"}</option>
                                        ))}
                                    </select>
                                </fieldset>
                            </div>
                        </div>
                        <div className="guests">
                            <fieldset>
                                <label htmlFor="guests">Number of guests</label>
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
                                    onBlur={() => { setGuestsNumberIsTouched(true)}}
                                />
                                <div className="validationerror">{!guestsNumberValid(guestsNumber) && guestsNumberIsTouched ? "Choose between 1 and 10": null}</div>
                            </fieldset>
                        </div>
                        <div className="occasion">
                            <fieldset>
                                <label htmlFor="occasion">Occasion</label>
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
                        <div className="firstname">
                            <fieldset>
                                <label> 
                                    First name <sup>*</sup> 
                                </label> 
                                <input 
                                    placeholder="First name"
                                    value={firstName} 
                                    required
                                    minLength={3}
                                    onChange={(e) => { 
                                        setFirstName(e.target.value); 
                                    }}
                                    onBlur={() => { setFirstNameIsTouched(true)}}
                                />
                                <div className="validationerror">{!firstNameValid(firstName) && firstNameIsTouched ? "Type 3 characters at least": null}</div>
                            </fieldset>
                        </div> 
                        <div className="lastname"> 
                            <fieldset>
                                <label> 
                                    Last name <sup>*</sup> 
                                </label> 
                                <input 
                                    placeholder="Last name"
                                    value={lastName} 
                                    required
                                    minLength={3}
                                    onChange={(e) => { 
                                        setLastName(e.target.value); 
                                    }}
                                    onBlur={() => { setLastNameIsTouched(true)}}
                                />
                                <div className="validationerror">{!lastNameValid(lastName) && lastNameIsTouched ? "Type 3 characters at least": null}</div>
                            </fieldset>
                        </div> 
                        <div className="email"> 
                            <fieldset>
                                <label> 
                                    Email <sup>*</sup> 
                                </label> 
                                <input 
                                    type="email"
                                    placeholder="Email"
                                    value={email} 
                                    required
                                    onChange={(e) => { 
                                        setEmail(e.target.value); 
                                    }}
                                    onBlur={() => { setEmailIsTouched(true)}}
                                />
                                <div 
                                    className="validationerror"
                                >
                                    {!emailValid(email) && emailIsTouched ? "Enter a valid email": null}
                                </div>
                            </fieldset>
                        </div> 
                        <div className="phone"> 
                            <fieldset>
                                <label> 
                                    Phone <sup>*</sup> 
                                </label> 
                                <input 
                                    placeholder="Phone"
                                    value={phone} 
                                    required
                                    onChange={(e) => { 
                                        setPhone(e.target.value); 
                                    }}
                                    onBlur={() => { setPhoneIsTouched(true)}}
                                />
                                <div 
                                    className="validationerror"
                                >
                                    {!phonelValid(phone) && phoneIsTouched? "Enter a valid Phone": null}
                                </div>
                            </fieldset>
                        </div> 
                    </form>
                </div>
                <div className="nextbutton">
                    <Link to="confirmpage">
                        <button>Next</button>
                    </Link>
                </div>
                <div>
                    <button 
                                type="submit" 
                                disabled={!getIsFormValid()}
                                form="formInfo"
                            >
                                Make Your reservation
                    </button>
                </div>
            </div>
        </>
    );

};

export default BookingForm;