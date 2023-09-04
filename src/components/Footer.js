import lowerLogo from "../images/LowerLogo.png"

const Footer = () => {

    return(
        <footer>
            Footer
            <img src={lowerLogo} alt="logo" />
            <ul>
                <li>Doormat</li>
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
            <ul>
                <li>Contact</li>
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
            <ul>
                <li>Social Media Links</li>
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
        </footer>
    );
};
export default Footer;