import React from 'react';
import s from './banner.module.scss';
import PropTypes from 'prop-types';

const Banner = ({ img, category, names, date }) => {
    return (
        <div className={s.banner} style={{'backgroundImage': `url(${img})`}}>
            <div className={s.title}>
                <p>{category} of</p>
                <h1>{names}</h1>
                <p>{new Date(date).toDateString()}</p>
            </div>
        </div>
    )
}

Banner.propTypes = {
    img: PropTypes.string,
    category: PropTypes.string,
    names: PropTypes.string,
    date: PropTypes.string
}

export default Banner;