// import Nav from "./Nav";
// import Footer from "./Footer";
import restaurant from "../images/restaurant.jpg"

import BookingForm from "./BookingForm";

const BookingPage = () => {
    return(
        <div className="bookingpage">
            <div className="image">
                <img src={restaurant} alt="restaurant" />
            </div>
            <div>
                <BookingForm />
            </div>
        </div>
    );

};

export default BookingPage;