// store projenin başında tanımlanır ve bir daha işimiz olmaz


import { applyMiddleware, combineReducers, createStore } from "redux";
import movieReducer from "./reducers/movieReducer";
import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genreReducer";




// reducer birleştirme
const rootReducer = combineReducers({
    movieReducer,
    genreReducer,

})
export default createStore(rootReducer, applyMiddleware(thunk));