import bruchetta from "../images/bruchetta2.jpg"
import lemonDessert from "../images/lemonDessert1.jpg"
import greekSalad from "../images/greekSalad1.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons'

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
                <div className="onearticle">
                    <div>
                        <img src={greekSalad} alt="greek salad" />
                    </div>
                    <div className="text">
                        <h2>Greek Salad</h2>
                        <p>
                            The famous greek salad of crispy lettuce, 
                            peppers, olives and our Chicago style feta 
                            cheese, garnished with crunchy garlic 
                            and rosemary croutons.
                        </p>
                    </div>
                    <div className="delivery">
                        <h3>
                            Order a delivery 
                            &nbsp;&nbsp;
                            <FontAwesomeIcon icon={faPersonBiking} />
                        </h3>
                    </div>
                </div>
                <div className="onearticle">
                    <div>
                        <img src={bruchetta} alt="bruchetta" />
                    </div>
                    <div className="text">
                        <h2>Bruchetta</h2>
                        <p>
                            Our brichetta is made from grilled bread
                            that has been smeared with garlic and 
                            seasoned with salt and olive oil.
                        </p>
                    </div>
                    <div className="delivery">
                        <h3>
                            Order a delivery
                            &nbsp;&nbsp;
                            <FontAwesomeIcon icon={faPersonBiking} />
                        </h3>
                    </div>
                </div>
                <div className="onearticle">
                    <div>
                        <img src={lemonDessert} alt="lemon dessert salad" />
                    </div>
                    <div className="text">
                        <h2>Lemon Dessert</h2>
                        <p>
                            This comes straight from grandma's recipe 
                            book, every last ingredient has been sourced 
                            and is authentic as can be imagined.
                        </p>
                    </div>
                    <div className="delivery">
                        <h3>
                            Order a delivery
                            &nbsp;&nbsp;
                            <FontAwesomeIcon icon={faPersonBiking} />
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Specials;