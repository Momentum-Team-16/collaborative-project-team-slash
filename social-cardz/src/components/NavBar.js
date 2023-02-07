import { Link } from 'react-router-dom'
import axios from 'axios'; 

const handleLogout = (token, setLogin) => {
    axios
    .post('https://social-cards-wg2j.onrender.con/auth/token/logout',
    { headers: {Authorization: `Token ${token}`, }, })
    .then(() => setLogin('',null))
    .catch(() => setLogin('',null))
}

export const NavBar = ({ setLogin, token }) => {
    return (
        <nav className="nav-bar">
            <button><Link to="/AllCards" path="relative" className="nav-button">All Cards</Link></button> 
            <button><Link to="/MyCards" path="relative" className="nav-button">My Cards</Link></button>
            <button><Link to="/Friends" path="relative" className="nav-button">Friends</Link></button> 
            <button><Link to="/CreateCard" path="relative" className="nav-button">Create A Card</Link></button>
            <button><Link to="/Login" path="relative" className="nav-button" onClick={() => setLogin(null)}>Logout</Link></button>
        </nav>
    )
}