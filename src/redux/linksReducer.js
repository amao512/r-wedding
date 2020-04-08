
const initialState = {
    data: [
        {name: 'Home', path: '/home'},
        {name: 'About', path: '/about'},
        {name: 'My plans', path: '/my-plans'},
        {name: 'Create', path: '/create'},
        {name: 'Restaurants', path: '/restaurants'},
    ]
}

const linksReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default linksReducer;