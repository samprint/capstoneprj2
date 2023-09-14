import combination from "../images/Combination.png"

const Chicago = () => {
    return(
        <div className="chicago">
            <div className="content">
                <div className="text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, 
                        focused on traditional recipe served with  
                        a modern twist.
                    </p>
                </div>
                <div>
                    <img src={combination} alt="Chefs Pictures" />
                </div>
            </div>
        </div>
    );

};

export default Chicago;