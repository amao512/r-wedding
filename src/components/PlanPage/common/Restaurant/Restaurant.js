import React from 'react';
import s from './restaurant.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Restaurant = ({ restaurant }) => {

    if(restaurant.img === undefined || restaurant.title === undefined){
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

Restaurant.propTypes = {
    restaurant: PropTypes.object.isRequired
}

export default Restaurant;