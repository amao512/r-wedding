import React from 'react';
import { connect } from 'react-redux';
import s from './restaurant.module.scss';
import PropTypes from 'prop-types';

const RestaurantPage = ({ slug, restaurants }) => {

    const restaurant = restaurants.find(r => r.slug === slug)

    return (
        <div className='container' >
            <div className={s.restaurant}>
                <h1>{restaurant.title}</h1>
                
                <div className={s.images}>
                    <img src={restaurant.img} alt={restaurant.title} />
                </div>
            </div>
        </div>
    )
}

const mstp = state => ({
    restaurants: state.restaurants.data
})

RestaurantPage.propTypes = {
    slug: PropTypes.string.isRequired,
    restaurants: PropTypes.array.isRequired
}

export default connect(mstp)(RestaurantPage);