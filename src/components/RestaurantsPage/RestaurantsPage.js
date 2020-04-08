import React, { useState } from 'react';
import s from './restaurants.module.scss';
import { connect } from 'react-redux';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import Filter from './FIlter/Filter';

const RestaurantsPage = ({ restaurants, filteredRestaurants }) => {

    const [filter, setFilter] = useState(false);

    return (
        <div className='container'>
            <Filter setFilter={setFilter} />
            {filter && 
                <div className={s.restaurants}>
                    <h3>Results: {filteredRestaurants.length}</h3>
                    <RestaurantsList restaurants={filteredRestaurants}/>
                </div>
            }

            <div className={s.restaurants}>
                <h3>All:</h3>
                <RestaurantsList restaurants={restaurants} />
            </div>
        </div>
    )
}

const mstp = state => ({
    restaurants: state.restaurants.data,
    filteredRestaurants: state.restaurants.filteredRestaurants
})

export default connect(mstp)(RestaurantsPage);