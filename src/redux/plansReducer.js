import { API } from "../api/api";

const GET_ALL_PLANS = 'GET_ALL_PLANS';
const DELETE_PLAN = 'DELETE_PLAN';

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
        case DELETE_PLAN:
            return {
                ...state,
                data: state.data.filter(plan => plan.id !== action.id)
            }
        default:
            return state;
    }
}

export const getAllPlans = plans => ({ type: GET_ALL_PLANS, plans });
export const deletePlan = id => ({ type: DELETE_PLAN, id });

export const getPlans = () => async dispatch => {
    await dispatch(getAllPlans(API.getData()))
}

export const setPlan = plans => async dispatch => {
    await API.setPlan(plans);
}

export default plansReducer;