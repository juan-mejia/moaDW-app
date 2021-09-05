import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../UI/Logo'
import ArrowIcon from '../UI/ArrowIcon'

import "./Navbar.css"

const Navbar = () => {
    const [active, setActive] = useState(false);
    let location = useLocation();


    useEffect(() => {
        if(location.pathname.includes('detail')){
            setActive(true);
        } else {
            setActive(false);
        }
     },[location]) 

    return (
        <nav className={`navbar background-gradient ${active ? 'active':''}`}>
            <div className="container">
                <Link to="/">
                    <ArrowIcon  />
                </Link>
                <Logo />
            </div>
        </nav>
    );
}

export default Navbar;