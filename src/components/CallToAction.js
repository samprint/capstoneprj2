import foodSample from "../images/restauranfood1.jpg"

const CallToAction = () => {
    return(
        <div className="calltoaction">
            <div className="text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, 
                    focused on traditional recipe served with  
                    a modern twist.
                </p>
                <button className="button">Reserve a Table</button>
            </div>
                <img src={foodSample} alt="Food Sample" />
            <div>

            </div>
        </div>
    );

};

export default CallToAction;