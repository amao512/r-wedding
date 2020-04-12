import React from 'react';
import s from './logo.module.scss';
import logo from '../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className={s.logo}>
            <NavLink to='/'>
                <img src={logo} alt='logo'/>
            </NavLink>
        </div>
    )
}

export default Logo;