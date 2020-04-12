import React from 'react';
import s from './restaurant.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Restaurant = ({ restaurant }) => {
    
    if(restaurant.fields === undefined){
        return (
            <div className={s.restaurant}>
                <h1>Restaurant: None</h1>
            </div>
        )
    }

    return (
        <div className={s.restaurant}>
            <h1>{restaurant.fields.title}</h1>
            <div className={s.img}>
                <img src={restaurant.fields.img.fields.file.url} alt='restaurant' />
                <NavLink to={`/restaurants/${restaurant.fields.slug}`}>
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