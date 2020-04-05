import React from 'react';
import s from './banner.module.scss';

const Banner = ({ img, category, names, date }) => {
    return (
        <div className={s.banner} style={{'backgroundImage': `url(${img})`}}>
            <div className={s.title}>
                <p>{category} of</p>
                <h1>{names}</h1>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Banner;