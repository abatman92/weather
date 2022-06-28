import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { cities } from "./reducers/cities";
import {results} from './reducers/results';
import { search } from "./reducers/search";


const rootReducer = combineReducers({
    cities,
    results,
    search
})

export const store = createStore(rootReducer, applyMiddleware(thunk))