import bruchetta from "../images/bruchetta2.jpg"
import lemonDessert from "../images/lemonDessert1.jpg"
import greekSalad from "../images/greekSalad1.jpg"

const Specials = () => {
    return(
        <div className="specials">
            <div className="toprow">
                <div>
                    <h1>Specials</h1>
                </div>
                <div>
                    <button className="button">Online Menu</button>
                </div>
            </div>
            <div className="articles">
                <div>
                    <div>
                        <img src={greekSalad} alt="greek salad" />
                    </div>
                    <div></div>
                </div>
                <div>
                    <div>
                        <img src={bruchetta} alt="bruchetta" />
                    </div>
                    <div></div>
                </div>
                <div>
                    <div>
                        <img src={lemonDessert} alt="lemon dessert salad" />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );

};

export default Specials;