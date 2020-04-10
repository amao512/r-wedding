import React from 'react';
import { connect } from 'react-redux';
import s from './restaurant.module.scss';
import PropTypes from 'prop-types';

const RestaurantPage = ({ slug, restaurants }) => {

    const restaurant = restaurants.find(r => r.fields.slug === slug)
    const {fields: {title, img: {fields: { file } } } } = restaurant;

    return (
        <div className='container' >
            <div className={s.restaurant}>
                <h1>{title}</h1>
                
                <div className={s.images}>
                    <img src={file.url} 
                        alt={title} />
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