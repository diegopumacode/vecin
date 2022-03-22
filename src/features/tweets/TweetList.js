import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findTweets } from './api'
import Tweet from './Tweet'

export default function TweetList() {
  const dispatch = useDispatch()
  const tweets = useSelector((state) => state.tweetReducer.items)

  useEffect(() => {
    dispatch(findTweets())

  }, [])

  return (
    <>
      {/* {JSON.stringify(tweets)} */}
      {
        tweets.map(tweet=> <Tweet key={tweet.id} tweet={tweet}/>)
      }
      
    </>
  )
}
