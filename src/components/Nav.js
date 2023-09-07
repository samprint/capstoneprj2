import logo from "../images/Logo.png"

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
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Menu</a>
                        </li>
                        <li>
                            <a href="">Reserve</a>
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