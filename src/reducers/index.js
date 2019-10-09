import { combineReducers } from 'redux';
import businesses from './businessReducer';

export default combineReducers({
    businesses: businesses
});