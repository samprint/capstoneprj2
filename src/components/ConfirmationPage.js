const ConfirmationPage = (
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
            <div>ConfirmationPage</div>
            <div className="confirmationfield">Date: {date}</div>
            <div className="confirmationfield">Time: {time}</div>
            <div className="confirmationfield">Guests number: {guestsNumber}</div>
            <div className="confirmationfield">Occasion: {occasion}</div>
            <div className="confirmationfield">First Name: {firstName}</div>
            <div className="confirmationfield">Last Name: {lastName}</div>
            <div className="confirmationfield">Email: {email}</div>
            <div className="confirmationfield">Phone: {phone}</div>
    
        </>
    );};
    export default ConfirmationPage;