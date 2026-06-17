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
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
})

// export const rootReducer = (state, action) => {
//     return {
//         user: userReducer(state.user, action),
//         stats: statsReducer(state.stats, action)
//     }
// }