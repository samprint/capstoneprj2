import lowerLogo from "../images/LowerLogo.png"

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
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Menu</a>
                            </li>
                            <li>
                                <a href="">Reservations</a>
                            </li>
                            <li>
                                <a href="">Login</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Contact</li>
                            <li>&nbsp;</li>
                            <li>
                                <a href="">Address</a>
                            </li>
                            <li>
                                <a href="">Phone number</a>
                            </li>
                            <li>
                                <a href="">Email</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Social Media Links</li>
                            <li>&nbsp;</li>
                            <li>
                                <a href="">Facebook</a>
                            </li>
                            <li>
                                <a href="">Whats Up</a>
                            </li>
                            <li>
                                <a href="">Linkdin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};
export default Footer;