import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    avatar: 'https://gravatar.com/avatar/000?d=monsterid',
    name: 'Monster'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeAvatar: (state, action) => {
            state.avatar = action.payload || state.avatar;
        },
        changeName: (state, action) => {
            state.name = action.payload || state.name;
        }
    }
});

export const {changeAvatar, changeName} = userSlice.actions;
export default userSlice.reducer;