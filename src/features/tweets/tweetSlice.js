import { createSlice } from '@reduxjs/toolkit'
import { findTweets } from './api'

const initialTweets = []

const tweetSlice = createSlice({
    name: 'tweet',
    initialState: {
        items: initialTweets,
        total: 0,
        statusList: "idle",
        currentPage: 1,
        pages:0
    },
    reducers: {
        likeTweet: (state, action) => {
            // console.log(action.payload)
            // let likes = localStorage.getItem("likes")
            // console.log(likes)
            // if (!likes) {
            //     console.log(likes)
            //     const foundTweet = state.items.find(tweetItem => tweetItem.id === action.payload.id)
            //     if (foundTweet) {
            //         localStorage.setItem("likes", JSON.stringify([foundTweet]))
            //         foundTweet.like = true
            //     }
            // } else {
            //     console.log('existe en el local storaje')
            //     let likeParse = JSON.parse(likes)
            //     const foundTweetLocalStorage = likeParse.find(tweetItem => tweetItem.id === action.payload.id)
            //     if (foundTweetLocalStorage) {
            //         const foundTweet = state.items.find(tweetItem => tweetItem.id === action.payload.id)
            //         foundTweet.like = false
            //     } else {
            //         console.log("else")
            //         const foundTweet = state.items.find(tweetItem => tweetItem.id === action.payload.id)
            //         foundTweet.like = true
            //     }
            // }

        }
    },
    extraReducers: {
        [findTweets.pending]: (state, action) => {
            state.statusList = "loading"
        },
        [findTweets.fulfilled]: (state, action) => {
            // 
            // !localStorage.getItem("likes") && localStorage.setItem("likes", JSON.stringify([]))
            // !localStorage.getItem("dislikes") && localStorage.setItem("dislikes", JSON.stringify([]))
            // .map((tweet) => ({ ...tweet, like: false, dislike: false }))
            // {id:1,like:true,dislike:false}
            // let statusTweets = localStorage.getItem("tweets")
            // let items = []
            // console.log(action.payload.tweets.data)
            // state.items.push(...action.payload.tweets.data)
            // state.items = action.payload.tweets.data
            // console.log(..state.)
            state.items = [...state.items,...action.payload.tweets.data]
            state.total = action.payload.tweets.count
            state.currentPage = +action.payload.tweets.currentPage
            state.pages = +action.payload.tweets.pages
            // state.currentPage = action.payload.tweets.count
            state.statusList = "succeded"
        },
    }
})

export const { likeTweet } = tweetSlice.actions
export default tweetSlice.reducer