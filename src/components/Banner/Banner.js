import React from 'react';
import s from './banner.module.scss';

const Banner = ({ title, img }) => {
    return (
        <div className='container'>
            <div className={s.banner} style={{'backgroundImage': 'url(' + img + ')'}}>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Banner;