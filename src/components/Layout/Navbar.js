// import { useParams } from 'react-router-dom'

import Logo from '../UI/Logo'
import ArrowIcon from '../UI/ArrowIcon'

import "./Navbar.css"

const Navbar = () => {
    let active = false;
    return (
        <nav className={`navbar background-gradient ${active ? 'active':''}`}>
            <div className="container">
                <ArrowIcon />
                <Logo />
            </div>
        </nav>
    );
}

export default Navbar;