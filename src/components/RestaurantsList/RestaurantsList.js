import React from 'react';
import s from './restaurants.module.scss';
import { NavLink } from 'react-router-dom';

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

export default RestaurantsList;