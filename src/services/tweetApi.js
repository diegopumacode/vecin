import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = "https://vecin-api.herokuapp.com"

export const fetchFindTweets = createAsyncThunk(
    "tweets/fetchFindTweets",
    async ({ currentPage }) => {
        const response = await fetch(`${baseUrl}/post?skip=${currentPage}`, {
            method: "GET",
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return { tweets: data };
    }
);


export const fetchFindTweetById = createAsyncThunk(
    "tweets/fetchFindTweetById",
    async ({ id }) => {
        const response = await fetch(`${baseUrl}/post/${id}`, {
            method: "GET",
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return { tweet: data };
    }
);


export const fetchComments = createAsyncThunk(
    "tweets/fetchComments",
    async ({ idPost }) => {
        const response = await fetch(`${baseUrl}/post/${idPost}/comment`, {
            method: "GET",
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return { comments: data };
    }
);

export const fetchCreateTweet = createAsyncThunk(
    "tweets/fetchCreateTweet",
    async ({ body }) => {

        const response = await fetch(`${baseUrl}/post`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return { tweet: data };
    }
);


export const fetchCreateComment = createAsyncThunk(
    "tweets/fetchCreateComment",
    async ({ id, body }) => {

        const response = await fetch(`${baseUrl}/post/${id}/comment`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return { tweet: data };
    }
);

export const fetchLike = createAsyncThunk(
    "tweets/fetchLike",
    async ({ id , toggle}) => {
        const response = await fetch(`${baseUrl}/post/${id}/like`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({toggle})
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return { tweet: data };
    }
);


export const fetchDisLike = createAsyncThunk(
    "tweets/fetchDisLike",
    async ({ id , toggle}) => {
        const response = await fetch(`${baseUrl}/post/${id}/dislike`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({toggle})
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return { tweet: data };
    }
);
