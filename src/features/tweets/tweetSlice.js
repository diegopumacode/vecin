import { createSlice } from '@reduxjs/toolkit'
import { findTweets } from './api'

const initialTweets = []

const tweetSlice = createSlice({
    name: 'tweet',
    initialState: {
        items: initialTweets,
        total: 0
    },
    reducers: {},
    extraReducers: {
        [findTweets.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.items = action.payload.tweets.data
            state.total = action.payload.tweets.count
        },
    }
})

export const { } = tweetSlice.actions
export default tweetSlice.reducer