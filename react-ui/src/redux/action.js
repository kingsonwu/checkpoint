import { GET_GOALS } from './actionTypes';

export const updateGoals = goal => {
  return {
    type: GET_GOALS,
    payload: {
      goal
    }
  }
}