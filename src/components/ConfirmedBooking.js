const ConfirmedBooking = (
    {
        formData
    }

    
)  => {

let x =3;
return(
    <>
        <div className="confirmedbooking">
            <div className="data">
                <div className="confirmfield">Date: {formData.date}</div>
                <div className="confirmfield">Time: {formData.time}</div>
                <div className="confirmfield">Guests number: {formData.guestsNumber}</div>
                <div className="confirmfield">Occasion: {formData.occasion}</div>
                <div className="confirmfield">First Name: {formData.firstName}</div>
                <div className="confirmfield">Last Name: {formData.lastName}</div>
                <div className="confirmfield">Email: {formData.email}</div>
                <div className="confirmfield">Phone: {formData.phone}</div>
            </div>
            <div>Your reservation is confirmed!, an email was sent to the address provided</div>
        </div>
    </>
    
);

};
export default ConfirmedBooking;