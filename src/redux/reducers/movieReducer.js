/* eslint-disable no-unused-labels */
import { ActionTypes } from "../actionTypes";

const initialState = {
    popularMovies: [],
    isLoading: false,
    isError: false,
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.MOVİES_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.MOVİES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                popularMovies: action.payload
            };

        case ActionTypes.MOVİES_ERROR:
            return { ...state, isLoading: false, isError: action.payload };

        default:
            return state;
    }
}
export default movieReducer;