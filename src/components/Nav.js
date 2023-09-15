import logo from "../images/Logo.png"

import { Routes, Route, Link } from "react-router-dom";

const Nav = () => {

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
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Menu</a>
                        </li>
                        <li>
                            {/* <a href="">Reservation</a> */}
                            <Link to="/reservation" >Reservation</Link>
                        </li>
                        <li>
                            <a href="">Order Online</a>
                        </li>
                        <li>
                            <a href="">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Nav;