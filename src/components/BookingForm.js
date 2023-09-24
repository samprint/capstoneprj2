import ConfirmPage from "./ConfirmPage"
import {useState} from "react";
import { useFormik } from "formik"; 
import * as Yup from 'yup'; 
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

    const formik = useFormik({ 
        initialValues: { 
            firstName: "", 
            // email: "", 
            // type: "hireMe", 
            // comment: "", 
        }, 
        // onSubmit: (values) => { 
        //     submit('https://john.com/contactme', values); 
        // }, 
        validationSchema: Yup.object({ 
            firstName: Yup.string().required("Required"), 
            // email: Yup.string().email("Invalid email address").required("Required"), 
            // comment: Yup.string() 
            // .min(25, "Must be at least 25 characters") 
            // .required("Required"), 
        }), 
        }); 

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
                                    <label htmlFor="res-date" >Choose date</label>
                                    <input 
                                        type="date" 
                                        id="res-date" 
                                        className="input-box"
                                        value={date}
                                        onChange={(e) =>{
                                            setDate(e.target.value)
                                            updateTimes(e.target.value)
                                        }}
                                    />
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
                                />
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
                                    onChange={(e) => { 
                                        setFirstName(e.target.value); 
                                    }}
                                />
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
                                    onChange={(e) => { 
                                        setLastName(e.target.value); 
                                    }}
                                />
                            </fieldset>
                        </div> 
                        <div className="email"> 
                            <fieldset>
                                <label> 
                                    Email <sup>*</sup> 
                                </label> 
                                <input 
                                    placeholder="Email"
                                    value={email} 
                                    onChange={(e) => { 
                                        setEmail(e.target.value); 
                                    }}
                                />
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
                                    onChange={(e) => { 
                                        setPhone(e.target.value); 
                                    }}
                                />
                            </fieldset>
                        </div> 
                        <input type="submit" value="Make Your reservation"/>
                    </form>
                </div>
                <div className="nextbutton">
                    <Link to="confirmpage">
                        <button>Next</button>
                    </Link>
                </div>
            </div>
        </>
    );

};

export default BookingForm;