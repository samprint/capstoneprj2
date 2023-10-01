import lowerLogo from "../images/LowerLogo.png"
import { Routes, Route, Link } from "react-router-dom";

const Footer = () => {

    return(
        <div className="foot">
            <footer>
                <div>
                    <img src={lowerLogo} alt="logo" />
                </div>
                <div className="lists">
                    <div>
                        <ul>
                            <li>Doormat</li>
                            <li>Navigation</li>
                            <li>
                                <Link
                                    className="link" 
                                    to="/" 
                                >
                                    Home
                                </Link>
                                {/* <a href="#">Home</a> */}
                            </li>
                            <li>
                                About
                                {/* <a href="#">About</a> */}
                            </li>
                            <li>
                                Menu
                                {/* <a href="#">Menu</a> */}
                            </li>
                            <li>
                                <Link
                                    className="link" 
                                    to="/bookingpage" 
                                >
                                    Reservation
                                </Link>
                                {/* <a href="#">Reservation</a> */}
                            </li>
                            <li>
                                Login
                                {/* <a href="#">Login</a> */}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Contact</li>
                            <li>&nbsp;</li>
                            <li>
                                Address
                                {/* <a href="#">Address</a> */}
                            </li>
                            <li>
                                Phone number
                                {/* <a href="#">Phone number</a> */}
                            </li>
                            <li>
                                Email
                                {/* <a href="#">Email</a> */}
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Social Media Links</li>
                            <li>&nbsp;</li>
                            <li>
                                Facebook
                                {/* <a href="#">Facebook</a> */}
                            </li>
                            <li>
                                WhatsApp
                                {/* <a href="#">WhatsApp</a> */}
                            </li>
                            <li>
                                Linkdin
                                {/* <a href="#">Linkdin</a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;