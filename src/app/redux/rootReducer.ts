import {combineReducers} from 'redux'
import {filmsReducer} from "./filmsReducer/filmsReducer";

const rootReducer = combineReducers({
    films: filmsReducer,
});

export default rootReducer
