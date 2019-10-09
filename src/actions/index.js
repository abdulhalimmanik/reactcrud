import { ADD, DELETE, FETCH, EDIT } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:4000/business';

export const createBusiness = ({ person_name, business_name, business_gst_number }) => {
    // console.log(person_name, business_name, business_gst_number);

    return (dispatch) => {
        return axios.post(`${apiUrl}/add`, { person_name, business_name, business_gst_number })
            .then(response => {
                dispatch(createBusinessSuccess(response.data))
                // console.log(response.data);
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const createBusinessSuccess = (data) => {
    return {
        type: ADD,
        payload: {
            _id: data._id,
            person_name: data.person_name,
            business_name: data.business_name,
            business_gst_number: data.business_gst_number,
        }
    }
};

export const editBusiness = (id, obj) => {
    // console.log(obj);
    // const obj = {
        const person_name = obj.person_name;
        const business_name = obj.business_name;
        const business_gst_number = obj.business_gst_number;
    // };

    return (dispatch) => {
        return axios.post(`${apiUrl}/update/`+id, { person_name, business_name, business_gst_number })
            .then(response => {
                dispatch(editBusinessSuccess(id, obj))
                // console.log('res', response.data);
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const editBusinessSuccess = (id, data) => {
    // console.log('actions: ', data);
    return {
        type: EDIT,
        payload: {
            _id: id,
            person_name: data.person_name,
            business_name: data.business_name,
            business_gst_number: data.business_gst_number,
        }
    }
};

export const deleteBusinessSuccess = id => {
    return {
        type: DELETE,
        payload: {
            id
        }
    }
}

export const deleteBusiness = id => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/delete/${id}`)
            .then(response => {
                dispatch(deleteBusinessSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchBusiness = (businesses) => {
    return {
        type: FETCH,
        businesses
    }
};

export const fetchBusinesses = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchBusiness(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};