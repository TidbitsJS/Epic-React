import React from 'react'
import {Link} from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './header.styles.scss'

const Header = () => {
    return (
        <div className="header">
           <Link to="/" className="logo-container">
                <Logo />
           </Link> 
           <div className="options">
                <Link to="/shop" className="option">Shop</Link>
                <Link to="/signin" className="option">SignIn</Link>
                <Link to="/contact" className="option">Contact</Link>
           </div>
        </div>
    )
}

export default Header
