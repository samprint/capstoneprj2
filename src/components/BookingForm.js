import { useNavigate } from "react-router-dom";

const BookingForm = ({

    // Reducer stuff...
    availableTimes,
    dispatch,

    // data filled by user of the app and their setters
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

    // is touched data and their setters
    dateIsTouched,
    guestsNumberIsTouched,
    firstNameIsTouched,
    lastNameIsTouched,
    emailIsTouched,
    phoneIsTouched,
    setDateIsTouched,
    setGuestsNumberIsTouched,
    setFirstNameIsTouched,
    setLastNameIsTouched,
    setEmailIsTouched,
    setPhoneIsTouched,

    // the data that will be summitted
    formData,
    setFormData,

    // submit function and response
    submitForm,
    response,

    // clearing the form after a successfull submit
    clearForm 
    }) => {

    // Validation states and functions
    function dateValid(x) { return ( x ) };
    function guestsNumberValid(x) { return ( (x > 0 && x < 11) ) };
    function firstNameValid(x = "") { return ( x.length > 2 ) };
    function lastNameValid(x = "") { return ( x.length > 2 ) };
    function emailValid(x = "") { return ( (x.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) ) };
    function phonelValid(x = "") { return ( (x.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)) ) };

    function getIsFormValid() { 
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

    // console.log("availableTimes2", availableTimes)

    // console.log("formData",formData)

    const navigate = useNavigate();

    const handleSubmit = (e) => { 
        e.preventDefault();

        // Setting the formData that will be sent
        setFormData({
            ...formData,
            date: date,
            time: time,
            guestsNumber: guestsNumber,
            occasion: occasion,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone
        })

        submitForm(formData);
        if (response){
            navigate("confirmedbooking");
            clearForm();
        }
        else {alert("Try again!");}
      };

    return(
        <>
            <div className="bookingform">
                <div><h1>Kindly fill the form to book a table</h1></div>
                <div className="form">
                    <form 
                        id="formInfo"
                        onSubmit={handleSubmit}
                    >
                        <div><h2>Enter your reservation details</h2></div>
                        <div className="datetime">
                            <div className="date">
                                <fieldset>
                                    <label htmlFor="res-date" >Date</label>
                                    <input 
                                        data-testid="date-input"
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
                                    <div 
                                        data-testid="date-errormsg"
                                        className="validationerror"
                                    >
                                            {!dateValid(date) && dateIsTouched ? "Choose a date": null}
                                    </div>
                                </fieldset>
                            </div>
                            <div className="time">
                                <fieldset>
                                    <label htmlFor="res-time">Time<sup>~</sup></label>
                                    <select 
                                        data-testid="time-input"
                                        id="res-time" 
                                        className="input-box"
                                        value={time}
                                        onChange={(e) =>{
                                            setTime(e.target.value)
                                            // console.log("availableTimes1", availableTimes)
                                        }}
                                    >
                                        { availableTimes ? (availableTimes.filter((slot)=> slot.available ).map((obj) => (
                                            <option key={obj.id}>{ obj.time}</option>
                                        ))) : ""
                                        }
                                    </select>
                                    <div 
                                        data-testid="time-errormsg"
                                        className="validationerror"
                                    >
                                            { (date && !time) ? "Choose a time": null}
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                        <div className="guests">
                            <fieldset>
                                <label htmlFor="guests">Guests</label>
                                <input 
                                    data-testid="guestsNumber-input"
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
                                <div 
                                    data-testid="guestsNumber-errormsg"
                                    className="validationerror"
                                >
                                        {!guestsNumberValid(guestsNumber) && guestsNumberIsTouched ? "Choose between 1 and 10": null}
                                </div>
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
                        <div><h2>Enter your info</h2></div>
                        <div className="firstname">
                            <fieldset>
                                <label> 
                                    First name  
                                </label> 
                                <input 
                                    // className="input-box"
                                    data-testid="firstName-input"
                                    placeholder="First name"
                                    value={firstName} 
                                    required
                                    minLength={3}
                                    onChange={(e) =>   setFirstName(e.target.value) }
                                    onBlur={() => { setFirstNameIsTouched(true)}}
                                />
                                <div 
                                    data-testid="firstName-errormsg"
                                    className="validationerror"
                                >
                                    {!firstNameValid(firstName) && firstNameIsTouched ? "Type 3 characters at least for first name": null}
                                </div>
                            </fieldset>
                        </div> 
                        <div className="lastname"> 
                            <fieldset>
                                <label> 
                                    Last name  
                                </label> 
                                <input 
                                    data-testid="lastName-input"
                                    placeholder="Last name"
                                    value={lastName} 
                                    required
                                    minLength={3}
                                    onChange={(e) => { 
                                        setLastName(e.target.value); 
                                    }}
                                    onBlur={() => { setLastNameIsTouched(true)}}
                                />
                                <div 
                                    data-testid="lastName-errormsg"
                                    className="validationerror"
                                >
                                        {!lastNameValid(lastName) && lastNameIsTouched ? "Type 3 characters at least": null}
                                </div>
                            </fieldset>
                        </div> 
                        <div className="email"> 
                            <fieldset>
                                <label> 
                                    Email<sup>*</sup>
                                </label> 
                                <input 
                                    data-testid="email-input"
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
                                    data-testid="email-errormsg"
                                    className="validationerror"
                                >
                                    {!emailValid(email) && emailIsTouched ? "Enter a valid email": null}
                                    {/* {!emailValid(email) && emailIsTouched && <span data-testid="email-errormsg">"Enter a valid email</span>} */}
                                </div>
                            </fieldset>
                        </div> 
                        <div className="phone"> 
                            <fieldset>
                                <label> 
                                    Phone<sup>+</sup> 
                                </label> 
                                <input 
                                    data-testid="phone-input"
                                    placeholder="Phone"
                                    value={phone} 
                                    required
                                    onChange={(e) => { 
                                        setPhone(e.target.value); 
                                    }}
                                    onBlur={() => { setPhoneIsTouched(true)}}
                                />
                                <div 
                                    data-testid="phone-errormsg"
                                    className="validationerror"
                                >
                                    {!phonelValid(phone) && phoneIsTouched? "Enter a valid Phone": null}
                                </div>
                            </fieldset>
                        </div> 
                    </form>
                </div>
                <div className="submitbutton">
                    <button 
                                data-testid="submit-button"
                                type="submit" 
                                disabled={!getIsFormValid()}
                                form="formInfo"
                    >
                                Submit
                    </button>
                    <div 
                        data-testid="submit-errormsg"
                        className="validationerror"
                    >
                        { !getIsFormValid() ? "All fields should be filled": null}
                    </div>
                </div>
                <div className="notice" >
                    <p>* Email is only used to send confirmation</p>
                    <p>+ Phone is only used for unexpected circumstances</p>
                </div>
            </div>
        </>
    );

};

export default BookingForm;