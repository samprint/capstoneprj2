// import Nav from "./Nav";
// import Footer from "./Footer";

import restaurant from "../images/restaurant.jpg"
import BookingForm from "./BookingForm";

import {useState} from "react";

const BookingPage = () => {

    const [time, setTime] = useState("08:00");

    const availableTimes = [
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

    return(
        <div className="bookingpage">
            <div className="image">
                <img src={restaurant} alt="restaurant" />
            </div>
            <div>
                <BookingForm 
                    availableTimes = {availableTimes}
                    time = {time}
                    setTime = {setTime}
                />
            </div>
        </div>
    );

};

export default BookingPage;