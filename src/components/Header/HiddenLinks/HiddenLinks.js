import React from 'react';
import s from './hiddenLinks.module.scss';
import { NavLink } from 'react-router-dom';

const HiddenLinks = ({ links, showLinks, setShowLinks }) => {
    return (
        <div className={showLinks ? s.showLinks : s.hiddenLinks}>
                <ul>
                    {links.map((link, index) => (
                        <li key={index} onClick={() => setShowLinks(false)}>
                            <NavLink to={link.path}>{link.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
    )
}

export default HiddenLinks;