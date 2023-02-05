import { Link } from 'react-router-dom'

export const NavBar = ({ setLogin }) => {
    return (
        <nav className="nav-bar">
            <Link to="/AllCards" path="relative" className="nav-button">All Cards</Link>
            <Link to="/MyCards" path="relative" className="nav-button">My Cards</Link>
            <Link to="/Friends" path="" className="nav-button">Friends</Link>
            <Link to="/CreateCard" path="" className="nav-button">Create A Card</Link>
            <Link to="/Login" onClick={() => setLogin(null)}>Login</Link>
        </nav>
    )
}