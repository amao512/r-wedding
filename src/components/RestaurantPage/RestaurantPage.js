import React from 'react';
import { connect } from 'react-redux';
import s from './restaurant.module.scss';

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

export default connect(mstp)(RestaurantPage);