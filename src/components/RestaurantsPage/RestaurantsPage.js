import React, { useState } from 'react';
import s from './restaurants.module.scss';
import { connect } from 'react-redux';
import RestaurantsList from '../RestaurantsList/RestaurantsList';
import Filter from './FIlter/Filter';
import PropTypes from 'prop-types';
import Pagination from './Pagination/Pagintaion';
import { changePage } from '../../redux/restaurantsReducer';

const RestaurantsPage = props => {

    const { 
        restaurants, filteredRestaurants,
        isFiltered,
        changePage, pageSize, currentPage 
    } = props;

    const [restaurantsPage, setRestaurantsPage] = useState([])

    return (
        <div className='container'>
            <Filter />
            {isFiltered && 
                <div className={s.restaurants}>
                    <h3>Results: {filteredRestaurants.length}</h3>
                    <RestaurantsList restaurants={filteredRestaurants}/>
                </div>
            }

            <div className={s.restaurants}>
                <h3>All:</h3>
                <RestaurantsList restaurants={restaurantsPage} />
            </div>
            
            <Pagination arr={restaurants} pageSize={pageSize}
                        currentPage={currentPage}
                        setArrPage={setRestaurantsPage}
                        setPage={changePage}
            />
        </div>
    )
}

const mstp = state => ({
    restaurants: state.restaurants.data,
    filteredRestaurants: state.restaurants.filteredRestaurants,
    isFiltered: state.restaurants.isFiltered,
    pageSize: state.restaurants.pageSize,
    currentPage: state.restaurants.currentPage
})

RestaurantsPage.propTypes = {
    restaurants: PropTypes.array.isRequired,
    filteredRestaurants: PropTypes.array.isRequired,
    changePage: PropTypes.func,
    pageSize: PropTypes.number,
    currentPage: PropTypes.number
}

export default connect(mstp, { changePage })(RestaurantsPage);