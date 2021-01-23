import './Navbar.css';

const Navbar = () => {

    return (
        <nav className="main-nav">
            <div className="container d-flex">
                <a className="brand" href="!#">Gyroute</a>
                <ul className="nav justify-content-end ml-auto">
                    <li>
                        <a href="!#">Progress</a>
                    </li>
                    <li>
                        <a href="!#">Workouts</a>
                    </li>
                    <li>
                        <a href="!#">Exercises</a>
                    </li>
                    <li>
                        <a href="!#">User</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;