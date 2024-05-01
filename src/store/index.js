import {configureStore} from "@reduxjs/toolkit";
import postsReducer from './AuthSlice'
export const store = configureStore({
    reducer: {
        auth: postsReducer
    }
})