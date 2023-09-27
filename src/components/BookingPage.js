import {fetchAPI, submitAPI} from "../api";

import restaurant from "../images/restaurant.jpg"
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

import {useState} from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import {
    Link,
    Route,
    Routes
} from "react-router-dom";
import Footer from "./Footer";


const BookingPage = () => {

    // states for useState
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guestsNumber, setGuestsNumber] = useState("");
    const [occasion, setOccasion] = useState("No Occasion");
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [phone, setPhone] = useState("");

    const [ dateIsTouched, setDateIsTouched ] = useState( false );
    const [ guestsNumberIsTouched, setGuestsNumberIsTouched ] = useState( false );
    const [ firstNameIsTouched, setFirstNameIsTouched ] = useState( false );
    const [ lastNameIsTouched, setLastNameIsTouched ] = useState( false );
    const [ emailIsTouched, setEmailIsTouched ] = useState( false );
    const [ phoneIsTouched, setPhoneIsTouched ] = useState( false );

    const [formData, setFormData] =  useState({        
        date: "",
        time: "",
        guestsNumber: "",
        occasion: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    })

    // Fetching data
    const [availableTimesAPI, setAvailableTimesAPI] = useState();

    const fetchData = (something) => {
        fetchAPI(something)
        .then((data) => { setAvailableTimesAPI(data); }) 
    }

    useEffect(() => {
        console.log("date: ", date)
        fetchData(date)
    }, [date])

    //  Submit data
    const [response, setResponse] = useState(false);

    const submitForm = (something) => {
        submitAPI(something)
        .then((data) => { setResponse(data); }) 
    }

    console.log("response: ",response)

    // Reducer
    const updateTimes = (state, action) => {
        let newState;
        if (action.type === 'Change date'){ 
            newState = availableTimesAPI
        }
        return newState;    
    }

    // Reducer continue...
    const initialState = initializeTimes();
    const [availableTimes, dispatch] = useReducer(updateTimes, initialState)

    // create the initial state for the availableTimes
    function initializeTimes(){
        let initialtimes =
    [
        {id:1,time:"08:00", available: false},
        {id:2,time:"09:00", available: false},
        {id:3,time:"10:00", available: false},
        {id:4,time:"11:00", available: false},
        {id:5,time:"12:00", available: false},
        {id:6,time:"13:00", available: false},
        {id:7,time:"14:00", available: false},
        {id:8,time:"15:00", available: false},
        {id:9,time:"16:00", available: false},
        {id:10,time:"17:00", available: false},
        {id:11,time:"18:00", available: false},
        {id:12,time:"19:00", available: false},
        {id:13,time:"20:00", available: false},
        {id:14,time:"21:00", available: false},
        {id:15,time:"22:00", available: false},
    ];

        return initialtimes;
    }

    // clearing form after submitting
    const clearForm = () => { 
        setDate("");
        setTime("");
        setGuestsNumber("");
        setOccasion("No Occasion");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setDateIsTouched(false);
        setGuestsNumberIsTouched(false);
        setFirstNameIsTouched(false);
        setLastNameIsTouched(false);
        setEmailIsTouched(false);
        setPhoneIsTouched(false);
      };


    return(
    <>
        <div className="bookingpage">
            <div className="image">
                <img src={restaurant} alt="restaurant" />
            </div>
            <div>
            <Routes>
                <Route path="/" element={
                <BookingForm
                    availableTimes = {availableTimes}
                    dispatch = {dispatch}
                    date = {date}
                    setDate = {setDate}
                    time = {time}
                    setTime = {setTime}
                    guestsNumber = {guestsNumber}
                    setGuestsNumber = {setGuestsNumber}
                    occasion = {occasion}
                    setOccasion = {setOccasion}
                    firstName = {firstName}
                    setFirstName = {setFirstName}
                    lastName = {lastName}
                    setLastName = {setLastName}
                    email = {email}
                    setEmail = {setEmail}
                    phone = {phone}
                    setPhone = {setPhone}

                    dateIsTouched = {dateIsTouched}
                    guestsNumberIsTouched = {guestsNumberIsTouched}
                    firstNameIsTouched = {firstNameIsTouched}
                    lastNameIsTouched = {lastNameIsTouched}
                    emailIsTouched = {emailIsTouched}
                    phoneIsTouched = {phoneIsTouched}
                    setDateIsTouched = {setDateIsTouched}
                    setGuestsNumberIsTouched = {setGuestsNumberIsTouched}
                    setFirstNameIsTouched = {setFirstNameIsTouched}
                    setLastNameIsTouched = {setLastNameIsTouched}
                    setEmailIsTouched = {setEmailIsTouched}
                    setPhoneIsTouched = {setPhoneIsTouched}

                    formData = {formData}
                    setFormData = {setFormData}

                    submitForm = {submitForm}
                    response = {response}

                    clearForm = {clearForm}
                />
                }/>
                <Route path="confirmedbooking" element={
                <ConfirmedBooking
                    date = {date}
                    time = {time}
                    guestsNumber = {guestsNumber}
                    occasion = {occasion}
                    firstName = {firstName}
                    lastName = {lastName}
                    email = {email}
                    phone = {phone}
                    formData ={formData}
                    // clearForm = {clearForm}
                />
                }/> 
            </Routes>
            </div> 
        </div>
    </>
    )
    /* End copied data */ 
};

export default BookingPage;