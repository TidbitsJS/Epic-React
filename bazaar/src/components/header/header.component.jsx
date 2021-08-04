import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'

const Header = ({ currentUser }) => {
    return (
        <div className="header">
           <Link to="/" className="logo-container">
                <Logo />
           </Link> 
           <div className="options">
                <Link to="/shop" className="option">Shop</Link>
                <Link to="/contact" className="option">Contact</Link>
                {
                    currentUser ? <div className="option" onClick={() => auth.signOut()}> SIGN OUT </div>
                    : <Link to="/signin" className="option">Sign In</Link>
                }
           </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)
