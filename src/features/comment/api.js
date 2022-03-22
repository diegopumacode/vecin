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

export const createComment = createAsyncThunk(
    "tweets/createComment",
    async ({comment, id}) => {
        console.log(comment,id)
      const response = await fetch(`http://localhost:8000/post/${id}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(comment)
      });
  
      const data = await response.json();
      if(!response.ok) {
        throw new Error(data);
      }
  
      return { data };
    }
  );