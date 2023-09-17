import {useState} from "react";

const BookingForm = ({availableTimes, time, setTime}) => {

    const [date, setDate] = useState("2023-01-01");
    // const [time, setTime] = useState("08:00");
    const [guestsNumber, setGuestsNumber] = useState(1);

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

    const clearForm = () => { 
      };     

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        alert("Account created!"); 
        clearForm(); 
      }; 

    return(
        <div className="bookingform">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="datetime">
                        <div className="date">
                            <fieldset>
                                <label for="res-date" >Choose date</label>
                                <input 
                                    type="date" 
                                    id="res-date" 
                                    className="input-box"
                                    value={date}
                                    onChange={(e) =>{
                                        setDate(e.target.value)
                                    }}
                                />
                            </fieldset>
                        </div>
                        <div className="time">
                            <fieldset>
                                <label for="res-time">Choose time</label>
                                <select 
                                    id="res-time" 
                                    className="input-box"
                                    value={time}
                                    onChange={(e) =>{
                                        setTime(e.target.value)
                                    }}
                                >
                                    {availableTimes.map((option) => (
                                        <option>{option}</option>
                                    ))}
                                  {/* <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option> */}
                                </select>
                            </fieldset>
                        </div>
                    </div>
                    <div className="guests">
                        <fieldset>
                            <label for="guests">Number of guests</label>
                            <input 
                                type="number" 
                                placeholder="1" 
                                min="1" 
                                max="10" 
                                id="guests"
                                className="input-box"
                                value={guestsNumber}
                                onChange={(e) =>{
                                    setGuestsNumber(e.target.value)
                                }}
                            />
                        </fieldset>
                    </div>
                    <div className="occasion">
                        <fieldset>
                            <label for="occasion">Occasion</label>
                            <select id="occasion" className="input-box">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </fieldset>
                    </div>
                    <input type="submit" value="Make Your reservation"/>
                </form>
            </div>
        </div>
    );

};

export default BookingForm;