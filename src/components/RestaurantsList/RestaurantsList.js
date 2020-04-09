import React from 'react';
import s from './restaurants.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const RestaurantsList = ({ restaurants }) => {
    return (
        <div className={s.restaurants}>
            {restaurants.map((item, index) => (
                <div key={index} className={s.single} 
                style={{'backgroundImage': `url(${item.img})`}}>
                    <NavLink to={`restaurants/${item.slug}`}>
                        <p>{item.title}</p>
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

RestaurantsList.propTypes = {
    restaurants: PropTypes.array.isRequired
}

export default RestaurantsList;