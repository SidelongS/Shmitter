import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
import statsReducer from "../features/stats/statsSlice.js";


export const store = configureStore({
    reducer: {
        user: userReducer,
        stats: statsReducer
    }
});