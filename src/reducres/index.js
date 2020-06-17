import { combineReducers } from 'redux';
import artists from  './artist_reducers';

const rootReducer = combineReducers ({
    artists
})

export default rootReducer;