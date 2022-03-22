import { createAsyncThunk } from "@reduxjs/toolkit";

export const findTweets = createAsyncThunk(
    "tweets/findTweets",
    async () => {
        const response = await fetch(`http://localhost:8000/post`, {
            method: "GET",
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return { tweets: data };
    }
);

