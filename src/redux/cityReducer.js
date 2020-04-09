import { API } from "../api/api";

const SET_CITIES = 'SET_CITIES';

const initialState = {
    data: []
}

const cityReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_CITIES:
            return {
                ...state,
                data: action.cities
            }
        default:
            return state;
    }
}

export const setCities = cities => ({ type: SET_CITIES, cities });

export const getCities = () => async dispatch => {
    await API.getCities().then(response => {
        dispatch(setCities(response.items));
    })
}

export default cityReducer;