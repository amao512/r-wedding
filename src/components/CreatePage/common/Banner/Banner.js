import React from 'react';
import s from './banner.module.scss';
import img from '../../../../assets/images/organizations/Image-05.jpg';

const Banner = () => {
    return (
        <div className={s.banner}>
                <div className={s.single} style={ {'backgroundImage': `url(${ img })`} }>
                    <h3>Wedding</h3>
                </div>
        </div>
    )
}

export default Banner;