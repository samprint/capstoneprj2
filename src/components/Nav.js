import logo from "../images/Logo.png"

const Nav = () => {

    return(
        <div class="nav">
            <nav>
                Nav
                <img src={logo} alt="logo" />
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
                        <a href="">Reservations</a>
                    </li>
                    <li>
                        <a href="">Login</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Nav;