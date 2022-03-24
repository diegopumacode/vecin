import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tweetsApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    tagTypes: ['Tweet'],
    endpoints: (builder) => ({
        tweets: builder.query({
            query: ({ page }) => `/post?skip=${page}`,
            providesTags: ["Tweets"]
        }),
        tweet: builder.query({
            query: (id) => ({
                url: `/post/${id}`,
            }),
            providesTags: ["Tweet"]
        }),
        addCommentTweet: builder.mutation({
            query: (data) => {
                console.log(data)
                return {
                    url: `/post/${data?.idTweet}/comment`,
                    method: 'POST',
                    body: data?.values
                }
            },
            invalidatesTags: ["Tweet"]
        }),
        addTweet: builder.mutation({
            query: (tweet) => ({
                url: "/post",
                method: 'POST',
                body: tweet
            }),
            invalidatesTags: ["Tweets", "Tweet"]
        }),

        likeTweet: builder.mutation({
            query: (id) => ({
                url: `/post/${id}/like`,
                method: 'PUT',
                body: {},
                invalidatesTags: ["Tweets", "Tweet"]
            }),

        }),

        like: builder.mutation({
            query: (id) => ({
                url: `/post/${id}/like`,
                method: 'PUT',
                body: {}
            }),
            invalidatesTags: ["Tweets", "Tweet"]
        }),
        disLike: builder.mutation({
            query: (id) => ({
                url: `/post/${id}/dislike`,
                method: 'PUT',
                body: {}
            }),
            invalidatesTags: ["Tweets", "Tweet"]
        }),

        disLikeTweet: builder.mutation({
            query: (id) => ({
                url: `/post/${id}/dislike`,
                method: 'PUT',
                body: {},
                invalidatesTags: ["Tweets", "Tweet"]
            }),

        }),

    })
})


export const {
    useTweetsQuery,
    useTweetQuery,
    useAddTweetMutation,
    useAddCommentTweetMutation,
    useLikeTweetMutation,
    useDisLikeTweetMutation,
    useLikeMutation,
    useDisLikeMutation
} = tweetsApi