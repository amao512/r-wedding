import img1 from '../assets/images/restaurants/baq-saraiy.jpeg';
import img2 from '../assets/images/restaurants/grand-royal.jpeg';
import img3 from '../assets/images/restaurants/satty.jpeg';
import img4 from '../assets/images/restaurants/versal.jpeg';
import img5 from '../assets/images/restaurants/aq-bosaga.jpg';
import img6 from '../assets/images/restaurants/manas.jpeg';
import img7 from '../assets/images/restaurants/imperator.jpeg';
import img8 from '../assets/images/restaurants/sapfir.jpeg';
import img9 from '../assets/images/restaurants/garden-hall.jpeg';
import img10 from '../assets/images/restaurants/vogue.jpg';
import img11 from '../assets/images/restaurants/shanyraq.jpeg';
import img12 from '../assets/images/restaurants/royal-d.jpeg';
import img13 from '../assets/images/restaurants/aq-shanyraq.jpeg';
import img14 from '../assets/images/restaurants/marsel.jpeg';
import img15 from '../assets/images/restaurants/continent.jpeg';
import img16 from '../assets/images/restaurants/tonus.jpeg';
import img17 from '../assets/images/restaurants/primavera.jpeg';
import img18 from '../assets/images/restaurants/saltanat-saraiy.jpeg';
import img19 from '../assets/images/restaurants/royal-rose.jpeg';



const FILTER_RESTAURANTS = 'FILTER_RESTAURANTS';

const initialState = {
    data: [
        {
            title: 'Baq Saraiy', img: img1, 
            city: 'Nur-Sultan', price: null, 
            capacity: 500, slug: 'baq-saraiy',
        },
        {
            title: 'Grand Royal', img: img2, 
            city: 'Taraz', price: null, 
            capacity: 400, slug: 'grand-royal',
        },
        {
            title: 'Satty', img: img3, 
            city: 'Nur-Sultan', price: null, 
            capacity: 600, slug: 'satty',
        },
        {
            title: 'Versal', img: img4, 
            city: 'Taraz', price: null, 
            capacity: 300, slug: 'versal',
        },
        {
            title: 'Aq Bosaga', img: img5, 
            city: 'Aqtau', price: null, 
            capacity: 400, slug: 'aq-bosaga',
        },
        {
            title: 'Manas', img: img6, 
            city: 'Aqtobe', price: null, 
            capacity: 600, slug: 'manas',
        },
        {
            title: 'Imperator', img: img7, 
            city: 'Almaty', price: null, 
            capacity: 500, slug: 'imperator',
        },
        {
            title: 'Sapfir', img: img8, 
            city: 'Atyrau', price: null, 
            capacity: 350, slug: 'sapfir',
        },
        {
            title: 'Garden Hall', img: img9, 
            city: 'Zhezqazgan', price: null, 
            capacity: 500, slug: 'garden-fall',
        },
        {
            title: 'Vogue', img: img10, 
            city: 'Qaragandy', price: null, 
            capacity: 600, slug: 'vogue',
        },
        {
            title: 'Shanyraq', img: img11, 
            city: 'Qyzylorda', price: null, 
            capacity: 400, slug: 'shanyraq',
        },
        {
            title: 'Royal & D', img: img12, 
            city: 'Kokshetau', price: null, 
            capacity: 500, slug: 'royal-d',
        },
        {
            title: 'Aq Shanyraq', img: img13, 
            city: 'Kostanay', price: null, 
            capacity: 350, slug: 'aq-shanyraq',
        },
        {
            title: 'Marsel', img: img14, 
            city: 'Pavlodar', price: null, 
            capacity: 400, slug: 'marsel',
        },
        {
            title: 'Continent', img: img15, 
            city: 'Petropavl', price: null, 
            capacity: 500, slug: 'continent',
        },
        {
            title: 'Tonus', img: img16, 
            city: 'Semey', price: null, 
            capacity: 350, slug: 'tonus',
        },
        {
            title: 'Primavera', img: img17, 
            city: 'Taldyqorgan', price: null, 
            capacity: 300, slug: 'primavera',
        },
        {
            title: 'Saltanat Saraiy', img: img18, 
            city: 'Oral', price: null, 
            capacity: 600, slug: 'saltanat-saraiy',
        },
        {
            title: 'Royal Rose', img: img19, 
            city: 'Shymkent', price: null, 
            capacity: 600, slug: 'royal-rose',
        },
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