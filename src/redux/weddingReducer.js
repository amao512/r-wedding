import { v4 } from 'uuid';


const GET_NAMES = 'GET_NAMES';
const GET_DATE = 'GET_DATE';
const GET_CITY = 'GET_CITY';
const GET_CAPACITY = 'GET_CAPACITY';
const GET_RESTAURANT = 'GET_RESTAURANT';
const COLLECT_WEDDING_DATA = 'COLLECT_WEDDING_DATA';
const GET_INVITE = 'GET_INVITE';
const GET_DESC = 'GET_DESC';

const initialState = {
    data: {},
    names: {},
    date: null,
    city: null,
    capacity: null,
    invite: null,
    desc: null,
    restaurant: null
}

const weddingReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_NAMES:
            return {...state, names: action.names}
        case GET_DATE:
            return {...state, date: action.date}
        case GET_CITY:
            return {...state, city: action.city}
        case GET_CAPACITY:
            return {...state, capacity: action.capacity}
        case GET_INVITE:
            return {...state, invite: action.invite }
        case GET_RESTAURANT:
            return {...state, restaurant: action.restaurant }
        case GET_DESC:
            return {...state, desc: action.desc }
        case COLLECT_WEDDING_DATA:
            return {
                ...state,
                data: {
                    id: v4(),
                    category: 'Wedding',
                    names: state.names,
                    date: state.date,
                    city: state.city,
                    capacity: state.capacity,
                    invite: state.invite,
                    desc: state.desc,
                    restaurant: state.restaurant
                }
            }
        default:
            return state;
    }
}

export const getNames = names => ({ type: GET_NAMES, names });
export const getDate = date => ({ type: GET_DATE, date });
export const getCity = city => ({ type: GET_CITY, city });
export const getCapacity = capacity => ({ type: GET_CAPACITY, capacity });
export const getInvite = invite => ({ type: GET_INVITE, invite });
export const getDesc = desc => ({ type: GET_DESC, desc });
export const getRestaurant = restaurant => ({ type: GET_RESTAURANT, restaurant });
export const collectWeddingData = () => ({ type: COLLECT_WEDDING_DATA });

export default weddingReducer;