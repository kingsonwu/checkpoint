import { GET_GOALS } from '../actionTypes';

const initialState = [];

function goals (state=initialState, action) {
  if (action.type === GET_GOALS) {
    return action.payload.goal;
  }
  return state;
}

export default goals;