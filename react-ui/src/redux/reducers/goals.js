import { GET_GOALS } from '../actionTypes';

const initialState = [];

function goals (state=initialState, action) {
  if (action.type === GET_GOALS) {
    const copy = state.slice();
    copy.push(action.payload.goal)
    return copy;
  }
  return state;
}

export default goals;