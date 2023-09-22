// import Nav from "./Nav";
// import Footer from "./Footer";

import {fetchAPI} from "../api";

import restaurant from "../images/restaurant.jpg"
import BookingForm from "./BookingForm";

import {useState} from "react";
import { useReducer } from "react";
import { useEffect } from "react";

// reducer
const updateTimes = (state, action) => {
    return state;
}

const BookingPage = () => {

    /* Fetching data*/
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
    /* Fetching data*/

    const [time, setTime] = useState("08:00");

    // const availableTimes = [
    //     "07:00",
    //     "08:00",
    //     "09:00",
    //     "10:00",
    //     "11:00",
    //     "12:00",
    //     "13:00",
    //     "14:00",
    //     "15:00",
    //     "16:00",
    //     "17:00",
    //     "18:00",
    //     "19:00",
    //     "20:00",
    //     "21:00",
    //     "22:00",
    // ];

    const initializeTimes = () => { 
        const initialTimes = [
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
        ];

        return initialTimes
    };

    // const updateTimes = (UTimes) => { 
    //     return UTimes
    // };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    return(
        <div className="bookingpage">
            <div className="image">
                <img src={restaurant} alt="restaurant" />
            </div>
            <div>
                <BookingForm 
                    availableTimes = {initializeTimes()}
                    time = {time}
                    setTime = {setTime}
                />
            </div>
        </div>
    );

};

export default BookingPage;