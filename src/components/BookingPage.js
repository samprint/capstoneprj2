// import Nav from "./Nav";
// import Footer from "./Footer";

import {fetchAPI} from "../api";

import restaurant from "../images/restaurant.jpg"
import BookingForm from "./BookingForm";
import ConfirmPage from "./ConfirmPage"

import {useState} from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import {
    Link,
    Route,
    Routes
} from "react-router-dom";
import Footer from "./Footer";

// reducer
// const updateTimes = (state, action) => {
//     return state;
// }

const BookingPage = () => {

    const [date, setDate] = useState("");
    const [time, setTime] = useState("11:00");
    const [guestsNumber, setGuestsNumber] = useState(10);
    const [occasion, setOccasion] = useState("No Occasion");

    let change_to_update;
    let counter = 0;

    /* Start Fetching data*/
    const [availableTimes12, setAvailableTimes12] = useState([]);

    const fetchData = (datetoreserve) => {
        fetchAPI(datetoreserve)
            .then((data) => {
                // console.log("data: ",data);
                setAvailableTimes12(data);
            })
    }

    useEffect(() => {
        // console.log(date)
        counter++;
        fetchData(date.toString)
        // console.log("availableTimes12: ",availableTimes12);
        // console.log("counter: ",counter);
    }, [change_to_update])
    /* End Fetching data*/

    // const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    // temporaryy state before creating a reducer
    const [availableTimes, setAvailableTimes] = useState(initializeTimes())

    // Create a updateTimes fct that will change the availableTimes based on the selected date.
    function updateTimes (sdate) {
            change_to_update = sdate;      
            let newAvailbleTimes = [...availableTimes];
            newAvailbleTimes = availableTimes12;
            setAvailableTimes(newAvailbleTimes);
            // console.log(availableTimes12);
    }

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


    return(
    <>
        <div>BookingPage</div>
        <div className="bookingpage">
            <div className="image">
                <img src={restaurant} alt="restaurant" />
            </div>
            <div>
            <Routes>
                <Route path="/" element={
                <BookingForm
                    updateTimes = {updateTimes}
                    availableTimes = {availableTimes}
                    date = {date}
                    setDate = {setDate}
                    time = {time}
                    setTime = {setTime}
                    guestsNumber = {guestsNumber}
                    setGuestsNumber = {setGuestsNumber}
                    occasion = {occasion}
                    setOccasion = {setOccasion}
                />
                }/>
                <Route path="confirmpage" element={
                <ConfirmPage
                    date = {date}
                    time = {time}
                    guestsNumber = {guestsNumber}
                    occasion = {occasion}
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