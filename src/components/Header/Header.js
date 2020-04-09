import React, { useState } from 'react';
import s from './header.module.scss';
import BurgerButton from './BurgerButton/BurgerButton';
import Logo from './Logo/Logo';
import Links from './Links/Links';
import HiddenLinks from './HiddenLinks/HiddenLinks';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = ({ links }) => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className='container'>
            <section className={s.headerSection}>
                
                <div className={s.header}>
                    <Logo />
                    <BurgerButton showLinks={showLinks} setShowLinks={setShowLinks}/>
                    <Links links={links}/>
                </div>

                <HiddenLinks links={links}
                             showLinks={showLinks} 
                             setShowLinks={setShowLinks}
                />

            </section>
        </div>
    )
}

const mstp = state => ({
    links: state.links.data
})

Header.propTypes = {
    links: PropTypes.array.isRequired
}

export default connect(mstp)(Header);