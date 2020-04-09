import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { 
    getNames, getDate, getCity, 
    getCapacity, getRestaurant, collectWeddingData,
    getInvite, getDesc
} from '../../../redux/weddingReducer';
import { filterRestaurants } from '../../../redux/restaurantsReducer';
import Wedding from './Wedding';
import PropTypes from 'prop-types';

const WeddingContainer = props => {

    const {
        getNames, getDate, getCity, 
        getCapacity, getRestaurant, 
        selectedCity, restaurants, 
        filterRestaurants, collectWeddingData,
        getInvite, getDesc
    } = props;

    const [names, setNames] = useState({});
    const [date, setDate] = useState();
    const [city, setCity] = useState();
    const [capacity, setCapacity] = useState();
    const [restaurant, setRestaurant] = useState([]);
    const [invite, setInvite] = useState();
    const [desc, setDesc] = useState();

    const [restaurantCondition, setRestaurantCondition] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        getNames(names);
        getDate(date);
        getCity(city);
        getCapacity(capacity);
        getRestaurant(restaurant);
        getInvite(invite);
        getDesc(desc);
    }, [getNames, getDate, getCity, getCapacity, 
        getRestaurant, names, date, city, capacity, 
        restaurant, getInvite, invite, getDesc, desc
    ])

    useEffect(() => {
        filterRestaurants(selectedCity, capacity)
    }, [filterRestaurants, selectedCity, capacity])

    const nextForm = () => {
        const { groom, bride } = names;

        if(groom.name === '' || groom.name === undefined){
            setError(true);
        } else if (groom.lastName === '' || groom.lastName === undefined){
            setError(true);
        } else if (bride.name === '' || bride.name === undefined){
            setError(true);
        } else if (bride.lastName === '' || bride.lastName === undefined){
            setError(true);
        } else if (date === '' || date === undefined){
            setError(true);
        } else if (city === '' || city === undefined){
            setError(true);
        } else if (capacity === '' || capacity === undefined){
            setError(true);
        } else if (invite === '' || invite === undefined){
            setError(true);
        } else if (desc === '' || desc === undefined){
            setError(true);
        } else {
            setError(false);
            setRestaurantCondition(true);
        }
    }

    const nextProps = {
        setNames, setDate, setCapacity, 
        setCity, error, setError, 
        restaurantCondition, restaurants, 
        setRestaurant, nextForm, collectWeddingData,
        setInvite, setDesc
    }

    return <Wedding {...nextProps} />
}

const mstp = state => ({
    selectedCity: state.wedding.city,
    restaurants: state.restaurants.filteredRestaurants
})

WeddingContainer.propTypes = {
    getNames: PropTypes.func.isRequired,
    getDate: PropTypes.func.isRequired,
    getCity: PropTypes.func.isRequired,
    getCapacity: PropTypes.func.isRequired,
    getRestaurant: PropTypes.func.isRequired,
    selectedCity: PropTypes.string,
    restaurants: PropTypes.array.isRequired,
    filterRestaurants: PropTypes.func.isRequired,
    collectWeddingData: PropTypes.func.isRequired,
    getInvite: PropTypes.func.isRequired,
    getDesc: PropTypes.func.isRequired
}

export default connect(
    mstp, { 
        getNames, getDate, getCity, 
        getCapacity, getRestaurant, 
        filterRestaurants, collectWeddingData,
        getInvite, getDesc
    })(WeddingContainer);