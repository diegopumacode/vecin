import { createSlice } from '@reduxjs/toolkit'
import { findByIdTweet } from './api'

const initialComment = []

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        tweet: {},
        comments: []
    },
    reducers: {},
    extraReducers: {
        [findByIdTweet.fulfilled]: (state, action) => {
            console.log(action.payload.tweet[0])
            state.tweet = action.payload.tweet[0]
            state.comments = action.payload.tweet[0].commendsList
        }
    }
})

export const { } = commentSlice.actions
export default commentSlice.reducer