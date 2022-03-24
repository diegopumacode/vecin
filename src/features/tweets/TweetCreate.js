import React from 'react'
import { useAddTweetMutation } from '../../api/tweetsApi'
import TweetForm from '../../components/TweetForm'

export default function TweetCreate() {

    const [addTweet] = useAddTweetMutation()

    const formSubmit = async (data) => {
        try {
            await addTweet(data)
        } catch (error) {
            alert(error)
        }
    }


    return (
        <TweetForm onFormSubmit={formSubmit} />
    )
}
