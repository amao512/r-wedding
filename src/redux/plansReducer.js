import { API } from "../api/api";

const GET_ALL_PLANS = 'GET_ALL_PLANS';

const initialState = {
    data: []
}

const plansReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_PLANS:
            return {
                ...state,
                data: action.plans || state.data
            }
        default:
            return state;
    }
}

export const getAllPlans = plans => ({ type: GET_ALL_PLANS, plans });

export const getPlans = () => async dispatch => {
    await dispatch(getAllPlans(API.getData()))
}

export const setPlan = plans => async dispatch => {
    await API.setPlan(plans);
}

export default plansReducer;