// import { useParams } from 'react-router-dom'

import Logo from '../UI/Logo'
import IconBack from '../UI/IconBack'

import "./Navbar.css"

const Navbar = () => {
    let active = false;
    return (
        <nav className={`navbar background-gradient ${active ? 'active':''}`}>
            <div className="container">
                <IconBack />
                <Logo />
            </div>
        </nav>
    );
}

export default Navbar;