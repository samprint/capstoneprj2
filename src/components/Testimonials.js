import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'

import customer1 from "../images/P1_m.jpg"
import customer2 from "../images/P2_m.jpg"
import customer3 from "../images/P3_m.jpg"
import customer4 from "../images/P4_m.jpg"

const Testimonials = () => {
    return(
        <div className="testimonials">
            <div>
                Testimonials
            </div>
            <div className="customers">
                <div className="onetestimonial">
                    <h3>
                        Rating
                        &nbsp;
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                    </h3>
                    <img src={customer1} alt="customer 1" />
                    <p>
                    “One of the best places I’ve eaten in. Great salad, awesome!”
                    </p>
                </div>
                <div className="onetestimonial">
                    <h3>
                        Rating
                        &nbsp;
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                        <FontAwesomeIcon icon={faStarHalf} size="2xs" style={{color: "#e5a50a",}} />
                    </h3>
                    <img src={customer2} alt="customer 2" />
                    <p>
                    “Very good service, good menu … not overly extensive. Food was very good quality all around. Prices were reasonable.”
                    </p>
                </div>
                <div className="onetestimonial">
                    <h3>
                        Rating
                        &nbsp;
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                        <FontAwesomeIcon icon={faStarHalf} size="2xs" style={{color: "#e5a50a",}} />
                    </h3>
                    <img src={customer3} alt="customer 3" />
                    <p>The food was delicious, I was disappointed that the plates were not larger!</p>
                </div>
                <div className="onetestimonial">
                    <h3>
                        Rating
                        &nbsp;
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                        <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                    </h3>
                    <img src={customer4} alt="customer 4" />
                    <p>
                    Enjoyed the whole experience and definitely recommend this place for a place to eat in.”
                    </p>
                </div>
            </div>
        </div>

    );

};

export default Testimonials;