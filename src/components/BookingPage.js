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
            <Routes>
                <Route path="/" element={<BookingForm
                    availableTimes = {availableTimes12}
                    date = {date}
                    setDate = {setDate}
                    time = {time}
                    setTime = {setTime}
                    guestsNumber = {guestsNumber}
                    setGuestsNumber = {setGuestsNumber}
                    occasion = {occasion}
                    setOccasion = {setOccasion}
                />}/>
                <Route path="/confirmpage" element={<ConfirmPage
                    date = {date}
                    time = {time}
                    guestsNumber = {guestsNumber}
                    occasion = {occasion}
                />}/>
                </Routes>
        </div>
    </>
    )
    /* End copied data */ 
};

export default BookingPage;