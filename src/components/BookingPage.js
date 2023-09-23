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
const updateTimes = (state, action) => {
    return state;
}

const BookingPage = () => {

    /* Start Fetching data*/
    const [availableTimes12, setAvailableTimes12] = useState([]);

    const fetchData = () => {
        fetchAPI("2023-01-01")
            .then((data) => {
                console.log(data);
                setAvailableTimes12(data);
            })
    }

    useEffect(() => {
        fetchData()
    }, [])
    /* End Fetching data*/

    // const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

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

    /* Start copied data */
    const [date, setDate] = useState("2023-02-01");
    const [time, setTime] = useState("11:00");
    const [guestsNumber, setGuestsNumber] = useState(10);
    const [occasion, setOccasion] = useState("No Occasion");

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
                    availableTimes = {availableTimes12}
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