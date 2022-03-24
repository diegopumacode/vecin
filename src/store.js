import { configureStore } from '@reduxjs/toolkit'
import tweetReducer from './features/tweets/tweetSlice'
import commentReducer from './features/comment/commentSlice'
import { tweetsApi } from './api/tweetsApi'
export const store = configureStore({
    reducer: {
        tweetReducer,
        commentReducer,
        [tweetsApi.reducerPath]: tweetsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tweetsApi.middleware),
});