import { Link } from 'react-router-dom'
export const NavBar = () => {
    return (
        <nav className="nav-bar">
            <Link to="/" path="relative" className="nav-button">All Cards</Link>
            <Link to="" path="" className="nav-button">My Cards</Link>
            <Link to="" path="" className="nav-button">Friends</Link>
            <Link to="" path="" className="nav-button">Create A Card</Link>
        </nav>
    )
}