const ConfirmPage = (
    {
        date,
        time,
        guestsNumber,
        occasion
    }
)  => {
return(
    <>
        <div>ConfirmPage</div>
        <div className="confirmfield">Date: {date}</div>
        <div className="confirmfield">Time: {time}</div>
        <div className="confirmfield">Guests number: {guestsNumber}</div>
        <div className="confirmfield">Occasion: {occasion}</div>

    </>
);};
export default ConfirmPage;