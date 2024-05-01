import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        name: '',
        username: '',
        email: '',
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        }
    }
})
export const {setName, setUsername, setEmail} = authSlice.actions
export default authSlice.reducer