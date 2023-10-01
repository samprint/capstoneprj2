import logo from "../images/Logo.png"

import { Routes, Route, Link } from "react-router-dom";

const Header = () => {

    return(
        <div className="nav">
            <nav>
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <ul>
                        <li>
                            {/* <a href="">Home</a> */}
                            <Link
                                className="link" 
                                to="/" 
                            >
                                Home
                            </Link>
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
                            {/* <a href="">Reservation</a> */}
                            <Link 
                                className="link" 
                                to="/bookingpage" 
                            >
                                Reservation
                            </Link>
                        </li>
                        <li>
                            Order Online
                            {/* <a href="#">Order Online</a> */}
                        </li>
                        <li>
                            Login
                            {/* <a href="#">Login</a> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Header;