import { createAsyncThunk } from "@reduxjs/toolkit";

export const findByIdTweet = createAsyncThunk(
    "tweets/findByIdTweet",
    async (id) => {
        const response = await fetch(`http://localhost:8000/post/${id}`, {
            method: "GET",
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        return { tweet: data };
    }
);