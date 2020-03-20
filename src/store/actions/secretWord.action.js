import axios from 'axios';
import { actionTypes } from '../actionTypes';

export const getSecretWord = () =>{
    return async (dispatch) =>{
        const url = 'http://localhost:3030';
        const response = await axios.get(url);
        dispatch({type:actionTypes.SET_SECRET_WORD, payload:response.data})
    }
}