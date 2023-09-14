import combination from "../images/Combination.png"

const Chicago = () => {
    return(
        <div className="chicago">
            <div className="content">
                <div className="text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Our chefs are passionate about creating delicious recipes,  
                        that, once prepared with passion and served 
                        with love, comes alife in your mouth.
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