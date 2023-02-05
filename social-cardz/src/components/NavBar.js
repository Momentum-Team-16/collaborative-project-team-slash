import { Link } from 'react-router-dom'
import { axios } from 'axios'; 

export const NavBar = ({ setLogin }) => {
    return (
        <nav className="nav-bar">
            <button><Link to="/AllCards" path="relative" className="nav-button">All Cards</Link></button> 
            <button><Link to="/MyCards" path="relative" className="nav-button">My Cards</Link></button>
            <Link to="/Friends" path="" className="nav-button">Friends</Link>
            <Link to="/CreateCard" path="" className="nav-button">Create A Card</Link>
            <button><Link to="/Login" onClick={() => setLogin(null)}>Login</Link></button>
        </nav>
    )
}