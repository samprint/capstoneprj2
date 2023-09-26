import {
    Link,
    Route,
    Routes
} from "react-router-dom";

const ConfirmedBooking = (
    {
        date,
        time,
        guestsNumber,
        occasion,
        firstName,
        lastName,
        email,
        phone,
    }
)  => {
return(
    <>
        <div className="confirmpage">
            <div className="data">
                <div className="confirmfield">Date: {date}</div>
                <div className="confirmfield">Time: {time}</div>
                <div className="confirmfield">Guests number: {guestsNumber}</div>
                <div className="confirmfield">Occasion: {occasion}</div>
                <div className="confirmfield">First Name: {firstName}</div>
                <div className="confirmfield">Last Name: {lastName}</div>
                <div className="confirmfield">Email: {email}</div>
                <div className="confirmfield">Phone: {phone}</div>
            </div>
            {/* <div className="buttons">
                <div>
                    <Link to="/bookingpage">
                        <button>
                            Change info entered
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/bookingpage/confirmedbooking">
                        <button>
                            Confirm and Submit
                        </button>
                    </Link>
                </div>
            </div> */}
            {/* <div>
                    <button 
                                type="submit" 
                                // disabled={!getIsFormValid()}
                                form="formInfo"
                            >
                                Make Your reservation
                    </button>
            </div> */}

        </div>
    </>
);};
export default ConfirmedBooking;