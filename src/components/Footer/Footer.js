import React from 'react';
import s from './footer.module.scss';
import footerLogo from '../../assets/images/footer-logo.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Footer = ({ links }) => {
    return (
        <div className={s.footerContainer}>
            <div className='container'>
                <section className={s.footer}>
                    <div className={s.logo}>
                        <img src={footerLogo} alt='logo' />
                    </div>

                    <div className={s.links}>
                        <ul>
                            {links.map((item, index) => (
                                <li key={index} >
                                    <NavLink to={item.path}>{item.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={s.copyright}>
                        <p>Copyright ©2020 All rights reserved | This template is made with  by Colorlib</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

const mstp = state => ({
    links: state.links.data
})

export default connect(mstp)(Footer);