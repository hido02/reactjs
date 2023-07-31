import axios from 'axios';
import { fetchDiscussionsRequest, fetchDiscussionsSuccess, fetchDiscussionsError } from './actions';

export const fetchDiscussions = () => {
    return dispatch => {
        dispatch(fetchDiscussionsRequest());
        axios.get('https://dummy.restapiexample.com/api/v1/employees')
        .then(res => {
            dispatch(fetchDiscussionsSuccess(res.data));
        })
        .catch(error => {
            dispatch(fetchDiscussionsError(error));
        });
    };
}