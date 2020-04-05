import img1 from '../assets/images/restaurants/baq-saraiy.jpeg';
import img2 from '../assets/images/restaurants/grand-royal.jpeg';
import img3 from '../assets/images/restaurants/satty.jpeg';
import img4 from '../assets/images/restaurants/versal.jpeg';

const FILTER_RESTAURANTS = 'FILTER_RESTAURANTS';

const initialState = {
    data: [
        {title: 'Baq Saraiy', img: img1, city: 'Nur-Sultan', price: null, capacity: 500},
        {title: 'Grand Royal', img: img2, city: 'Taraz', price: null, capacity: 400},
        {title: 'Satty', img: img3, city: 'Nur-Sultan', price: null, capacity: 600},
        {title: 'Versal', img: img4, city: 'Taraz', price: null, capacity: 300},
    ],
    filteredRestaurants: []
}

const restaurantsReducer = (state = initialState, action) => {
    switch(action.type){
        case FILTER_RESTAURANTS:
            return {
                ...state,
                filteredRestaurants: state.data.filter(r => r.city === action.city && r.capacity >= action.capacity)
            }
        default:
            return state;
    }
}

export const filterRestaurants = (city, capacity) => ({ type: FILTER_RESTAURANTS, city, capacity });

export default restaurantsReducer;