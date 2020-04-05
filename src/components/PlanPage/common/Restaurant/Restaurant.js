import React from 'react';
import s from './restaurant.module.scss';

const Restaurant = ({ restaurant }) => {
    return (
        <div className={s.restaurant}>
            <h1>{restaurant.title}</h1>
            <div className={s.img}>
                <img src={restaurant.img} alt='restaurant' />
                <button>More</button>
            </div>
        </div>
    )
}

export default Restaurant;