import { configureStore } from '@reduxjs/toolkit'
import tweetReducer from './features/tweets/tweetSlice'
import commentReducer from './features/comment/commentSlice'
export const store = configureStore({
    reducer: {
        tweetReducer,
        commentReducer
    }
});