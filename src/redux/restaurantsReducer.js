import { API } from '../api/api';


const SET_RESTAURANTS = 'SET_RESTAURANTS';
const FILTER_RESTAURANTS = 'FILTER_RESTAURANTS';

const initialState = {
    data: [],
    filteredRestaurants: []
}

const restaurantsReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_RESTAURANTS:
            return {
                ...state,
                data: action.restaurants
            }
        case FILTER_RESTAURANTS:
            return {
                ...state,
                filteredRestaurants: state.data.filter(r => (
                    r.fields.city === action.city && r.fields.capacity >= action.capacity
                ))
            }
        default:
            return state;
    }
}

export const setRestaurants = restaurants => ({ type: SET_RESTAURANTS, restaurants });
export const filterRestaurants = (city, capacity) => ({ type: FILTER_RESTAURANTS, city, capacity });

export const getRestaurants = () => async dispatch => {
    await API.getRestaurants().then(response => {
        dispatch(setRestaurants(response.items));
    })
}

export default restaurantsReducer;