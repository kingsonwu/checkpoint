import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
    name: 'goals',
    initialState: [
        { id: 1, title: "goal1", completed: false },
        { id: 1, title: "goal2", completed: false },
        { id: 1, title: "goal3", completed: false },

    ],
reducers: {
    addGoal: (state, action) => {
        const newGoal = {
            id: Date.now(),
            title:action.payload.title,
            completed:false
        };
        state.push(newGoal)
    }
}
});