import { createSlice } from '@reduxjs/toolkit'
import { findTweets } from './api'

const initialTweets = []

const tweetSlice = createSlice({
    name: 'tweet',
    initialState: {
        items: initialTweets,
        total: 0,
        statusList: "idle"
    },
    reducers: {},
    extraReducers: {
        [findTweets.pending]: (state, action) => {
            console.log(action.payload)
            state.statusList = "loading"
        },
        [findTweets.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.items = action.payload.tweets.data
            state.total = action.payload.tweets.count
            state.statusList = "succeded";
        },
    }
})

export const { } = tweetSlice.actions
export default tweetSlice.reducer