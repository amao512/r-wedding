import img3 from '../assets/images/organizations/Image-05.jpg';

const organizations = [
    {
        id: 1,
        title: 'Wedding', 
        img: img3, 
        info: 'Aenean tristique, duiid sedet blandit elt ultricies, ligula elit interd ures turpis, at bibendum lib dolor.', 
        selected: false
    },
]

const initialState = {
    data: organizations,
}

const organizationsReducer = (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}


export default organizationsReducer;