import React from 'react';
import s from './restaurants.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const RestaurantsList = ({ restaurants }) => {
    return (
        <div className={s.restaurants}>
            {restaurants.map(res => {
                const {title, slug, img} = res.fields;
                return (
                <div key={res.sys.id} className={s.single} 
                    style={{'backgroundImage': `url(${img.fields.file.url})`}}
                >
                    <NavLink to={`restaurants/${slug}`}>
                        <p>{title}</p>
                    </NavLink>
                </div>
            )})}
        </div>
    )
}

RestaurantsList.propTypes = {
    restaurants: PropTypes.array.isRequired
}

export default RestaurantsList;