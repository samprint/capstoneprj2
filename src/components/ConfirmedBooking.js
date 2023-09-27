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
        clearForm
    }

    
)  => {

let x =3;
return(
    <>
        <div className="confirmedbooking">
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
            <div>Your reservation is confirmed!, an email was sent to the address provided</div>
            { clearForm()}
        </div>
    </>
    
);

};
export default ConfirmedBooking;