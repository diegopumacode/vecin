import { createSlice, current } from "@reduxjs/toolkit";
import {
    fetchComments,
    fetchCreateComment,
    fetchCreateTweet,
    fetchFindTweetById,
    fetchFindTweets,
    fetchLike,
    fetchDisLike
} from "./tweetApi"

const tweetSlice = createSlice({
    name: 'tweets',
    initialState: {
        data: {},
        item: {},
        comments: [],
        statusFindTweet: "idle",
        statusCreateTweet: "idle",
        statusFindTweetById: "idle",
        statusCreateComment: "idle",
        statusFindComments: "idle",
        statusLoadingTweet: "idle",
        statusLike: "idle",
        statusDisLike: "idle"
    },
    reducers: {
        resetCreateStatus(state) {
            state.statusCreateTweet = "idle"
        }
    },
    extraReducers: {
        [fetchFindTweets.pending]: (state, action) => {

            if (action.meta.arg.currentPage === 1) {
                state.statusFindTweet = "loading"
            } else {
                state.statusLoadingTweet = "loading"
            }
        },
        [fetchFindTweets.fulfilled]: (state, action) => {
            if (action.payload.tweets.page === 1) {

                state.data = action.payload.tweets
                state.statusFindTweet = "succeded"
            } else {
                let currentState = current(state)
                state.data = { ...action.payload.tweets, items: [...currentState.data.items, ...action.payload.tweets.items] }
                state.statusLoadingTweet = "loading"
            }

            state.statusFindTweet = "idle"
            state.statusLoadingTweet = "idle"
        },

        [fetchCreateTweet.pending]: (state, action) => {
            state.statusCreateTweet = "loading"
        },
        [fetchCreateTweet.fulfilled]: (state, action) => {
            if (state.data.items) {
                state.data.items = [action.payload.tweet, ...state.data.items]
            }
            state.statusCreateTweet = "succeded"
        },
        [fetchFindTweetById.pending]: (state, action) => {
            state.statusFindTweetById = "loading"
        },
        [fetchFindTweetById.fulfilled]: (state, action) => {
            state.item = action.payload.tweet
            state.statusFindTweetById = "succeded"
        },

        [fetchCreateComment.pending]: (state, action) => {
            state.statusCreateComment = "loading"
        },
        [fetchCreateComment.fulfilled]: (state, action) => {
            state.item.comments = action.payload.tweet.post.comments
            state.statusCreateComment = "succeded"
        },

        [fetchComments.pending]: (state, action) => {
            state.statusFindComments = "loading"
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.comments = action.payload.comments
            state.statusFindComments = "succeded"
        },

        [fetchLike.pending]: (state, action) => {
            state.statusLike = "loading"
        },
        [fetchLike.fulfilled]: (state, action) => {
            if (action.payload.tweet.type === 1) {
                state.data.items.map(item => {
                    if (item.id === action.payload.tweet.id) {
                        if (item.likes > action.payload.tweet.likes) {
                            item["activelike"] = false
                        }else{
                            item["activelike"] = true
                        }
                        item.likes = action.payload.tweet.likes
                        return item
                    }
                    return item
                })
            } else {
                state.comments.map(item => {
                    if (item.id === action.payload.tweet.id) {
                        item.likes = action.payload.tweet.likes
                    }
                    return item
                })
            }

            state.statusLike = "succeded"
        },

        [fetchDisLike.pending]: (state, action) => {
            state.statusDisLike = "loading"
        },
        [fetchDisLike.fulfilled]: (state, action) => {
            if (action.payload.tweet.type === 1) {
                state.data.items.map(item => {
                    if (item.id === action.payload.tweet.id) {
                        item.dislikes = action.payload.tweet.dislikes
                    }
                    return item
                })
            } else {
                state.comments.map(item => {
                    if (item.id === action.payload.tweet.id) {
                        item.dislikes = action.payload.tweet.dislikes
                    }
                    return item
                })
            }
            state.statusDisLike = "succeded"
        },

    }
})

export const { resetCreateStatus } = tweetSlice.actions
export default tweetSlice.reducer
