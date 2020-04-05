import React from 'react';
import s from './links.module.scss';
import { NavLink } from 'react-router-dom';

const Links = ({ links }) => {
    return (
        <div className={s.links}>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink to={link.path}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Links;