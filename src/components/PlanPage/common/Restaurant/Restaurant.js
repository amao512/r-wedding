import React from 'react';
import s from './restaurant.module.scss';
import { NavLink } from 'react-router-dom';

const Restaurant = ({ restaurant }) => {

    if(restaurant.exist === undefined){
        return (
            <div className={s.restaurant}>
                <h1>{restaurant.title}</h1>
            </div>
        )
    }

    return (
        <div className={s.restaurant}>
            <h1>{restaurant.title}</h1>
            <div className={s.img}>
                <img src={restaurant.img} alt='restaurant' />
                <NavLink to={`/restaurants/${restaurant.slug}`}>
                    <button>More</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Restaurant;