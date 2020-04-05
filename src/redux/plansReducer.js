
const ADD_PLAN = 'ADD_PLAN';

const initialState = {
    data: [],
    weddings: []
}

const layoutsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_PLAN:
            return {
                ...state,
                data: [{ ...action.plan }, ...state.data],
            }
        default:
            return state;
    }
}

export const addPlan = plan => ({ type: ADD_PLAN, plan });

export default layoutsReducer;