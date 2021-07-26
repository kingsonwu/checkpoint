/* eslint-disable import/no-anonymous-default-export */
import { GET_USERNAME } from "../actionTypes";

//The reducer will populate the state its in charge of so that something exists 
// at startup.

const initialState = '';

export default function (state = initialState, action) {
    if(action.type === 'GET_USERNAME') {
    return action.payload.username;
}
    return state;
};