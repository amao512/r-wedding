import React from 'react';
import s from './hiddenLinks.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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

HiddenLinks.propTypes = {
    links: PropTypes.array.isRequired,
    showLinks: PropTypes.bool.isRequired,
    setShowLinks: PropTypes.func.isRequired
}

export default HiddenLinks;