const ConfirmPage = (
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
        <div>ConfirmPage</div>
        <div className="confirmfield">Date: {date}</div>
        <div className="confirmfield">Time: {time}</div>
        <div className="confirmfield">Guests number: {guestsNumber}</div>
        <div className="confirmfield">Occasion: {occasion}</div>
        <div className="confirmfield">First Name: {firstName}</div>
        <div className="confirmfield">Last Name: {lastName}</div>
        <div className="confirmfield">Email: {email}</div>
        <div className="confirmfield">Phone: {phone}</div>

    </>
);};
export default ConfirmPage;