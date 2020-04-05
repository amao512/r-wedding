import React from 'react';
import logo from '../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <NavLink to='/'>
                <img src={logo} alt='logo'/>
            </NavLink>
        </div>
    )
}

export default Logo;