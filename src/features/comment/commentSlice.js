import { createSlice } from '@reduxjs/toolkit'
import { createComment, findByIdTweet } from './api'

const initialComment = []
const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        tweet: {},
        comments: [],
        statusList:"idle"
    },
    reducers: {},
    extraReducers: {
        [findByIdTweet.pending]: (state, action) => {
            console.log(action.payload)
            state.statusList = "loading"
        },
        [findByIdTweet.fulfilled]: (state, action) => {
            console.log(action.payload.tweet[0])
            state.tweet = action.payload.tweet[0]
            state.comments = action.payload.tweet[0].commendsList
            state.statusList = "succeded";
        },
        [createComment.fulfilled]: (state, action) => {
            console.log(action.payload)
            // state.tweet = action.payload.tweet[0]
            state.comments = [action.payload.data,...state.comments]
        }
    }
})

export const { } = commentSlice.actions
export default commentSlice.reducer