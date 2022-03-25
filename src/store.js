import { configureStore } from '@reduxjs/toolkit'
import tweetReducer from './services/tweetSlice'
import { tweetsApi } from './api/tweetsApi'
export const store = configureStore({
    reducer: {
        tweets:tweetReducer,
        [tweetsApi.reducerPath]: tweetsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tweetsApi.middleware),
});