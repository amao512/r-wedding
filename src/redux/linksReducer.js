
const initialState = {
    data: [
        {name: 'Home', path: '/home'},
        {name: 'About', path: '/about'},
        {name: 'Blog', path: '/blog'},
        {name: 'Contact', path: '/contact'}
    ]
}

const linksReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default linksReducer;