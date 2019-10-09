import { ADD, DELETE, FETCH, EDIT } from '../actions/types';

export default function businessReducer(state = [], action) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];
        case DELETE:
            return state.filter(business => business._id !== action.payload.id);
        case FETCH:
            return action.businesses;
        case EDIT: 
            return state.map((business) => {
                // console.log(business);
                // console.log(action.payload);
                if (business._id === action.payload._id) {
                    return {
                        ...business,
                        _id: action.payload._id,
                        person_name: action.payload.person_name,
                        business_name: action.payload.business_name,
                        business_gst_number: action.payload.business_gst_number
                    }
                } else return business;
            });
        default:
            return state;
    }
}