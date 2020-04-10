import React from 'react';
import s from './restaurant.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Restaurant = ({ restaurant }) => {

    const {title, slug, img} = restaurant.fields;
    
    if(img.fields.file.url === undefined || title === undefined){
        return (
            <div className={s.restaurant}>
                <h1>{title}</h1>
            </div>
        )
    }

    return (
        <div className={s.restaurant}>
            <h1>{title}</h1>
            <div className={s.img}>
                <img src={img.fields.file.url} alt={title} />
                <NavLink to={`/restaurants/${slug}`}>
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