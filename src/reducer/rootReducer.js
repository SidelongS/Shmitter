/*
type State = {
    user: {
        name: string,
        avatar: string,
    },
    stats: {
        followers: number,
        following: number
     }
}
*/

import {userReducer} from "./userReducer.js";
import {statsReducer} from "./statsReducer.js";

export const rootReducer = (state, action) => {
    return {
        user: userReducer(state.user, action),
        stats: statsReducer(state.stats, action)
    }
}