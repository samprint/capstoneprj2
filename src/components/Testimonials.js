import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalf } from '@fortawesome/free-solid-svg-icons'

import customer1 from "../images/P1_m.jpg"
import customer2 from "../images/P2_m.jpg"
import customer3 from "../images/P3_m.jpg"
import customer4 from "../images/P4_m.jpg"

const Testimonials = () => {
    return(
        <div className='testimonials0'>
            <div className="testimonials1">
                <div className='title'>
                    Testimonials
                </div>
                <div className="customers">
                    <article className="onetestimonial">
                        <div className='content'>
                            <h3>
                                Rating
                                &nbsp;
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                            </h3>
                            <div className='imagename'>
                                <div><img src={customer1} alt="customer portrait" /></div>
                                <div><h4>Sam Kl.</h4></div>
                            </div>
                            <p>
                            “One of the best places I’ve eaten in. Great salad, awesome!”
                            </p>
                        </div>
                    </article>
                    <article className="onetestimonial">
                        <div className='content'>
                            <h3>
                                Rating
                                &nbsp;
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                                <FontAwesomeIcon icon={faStarHalf} size="2xs" style={{color: "#e5a50a",}} />
                            </h3>
                            <div className='imagename'>
                                <div><img src={customer2} alt="customer portrait" /></div>
                                <div><h4>Macy F.</h4></div>
                            </div>
                            <p>
                            “Very good service, good menu … not overly extensive. Prices were reasonable.”
                            </p>
                        </div>
                    </article>
                    <article className="onetestimonial">
                        <div className='content'>
                            <h3>
                                Rating
                                &nbsp;
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                                <FontAwesomeIcon icon={faStarHalf} size="2xs" style={{color: "#e5a50a",}} />
                            </h3>
                            <div className='imagename'>
                                <div><img src={customer3} alt="customer portrait" /></div>
                                <div><h4>Rick J.</h4></div>
                            </div>
                            <p>The food was delicious, I was disappointed that the plates were not larger!</p>
                        </div>
                    </article>
                    <article className="onetestimonial">
                        <div className='content'>
                            <h3>
                                Rating
                                &nbsp;
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                                <FontAwesomeIcon icon={faStar} size="2xs" style={{color: "#e5a50a",}} />
                            </h3>
                            <div className='imagename'>
                                <div><img src={customer4} alt="customer portrait" /></div>
                                <div><h4>Farah T.</h4></div>
                            </div>
                            <p>
                            Enjoyed the whole experience and definitely will recommend this place.”
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </div>

    );

};

export default Testimonials;