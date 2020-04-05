import { combineReducers, createStore } from "redux";
import restaurantsReducer from "./restaurantsReducer";
import eventReducer from "./eventReducer";
import linksReducer from "./linksReducer";
import cityReducer from "./cityReducer";
import weddingReducer from "./weddingReducer";
import plansReducer from "./plansReducer";

const reducers = combineReducers({
    restaurants: restaurantsReducer,
    event: eventReducer,
    links: linksReducer,
    city: cityReducer,
    wedding: weddingReducer,
    plans: plansReducer
})

const store = createStore(reducers)

window.store = store;

export default store;