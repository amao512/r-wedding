import React from 'react';
import s from './banner.module.scss';
import PropTypes from 'prop-types';

const Banner = ({ title, img }) => {
    return (
        <div className='container'>
            <div className={s.banner} style={{'backgroundImage': 'url(' + img + ')'}}>
                <p>{title}</p>
            </div>
        </div>
    )
}

Banner.propTypes = {
    title: PropTypes.string
}

export default Banner;