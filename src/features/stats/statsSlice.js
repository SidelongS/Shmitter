import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    followers: 0,
    following: 0
}

export const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        changeStats: (state, action) => {
            const {statsType, sum} = action.payload;
            const res = state[statsType] + sum;
            state[statsType] = res < 0 ? 0 : res;
        }
    }
});

export const {changeStats} = statsSlice.actions;
export default statsSlice.reducer;