import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TweetSkeleton from '../../components/skeletons/TweetSkeleton'
import { findTweets } from './api'
import Tweet from './Tweet'

export default function TweetList() {
  const dispatch = useDispatch()
  const tweets = useSelector((state) => state.tweetReducer.items)
  const status = useSelector((state) => state.tweetReducer.statusList)

  useEffect(() => {
    dispatch(findTweets())

  }, [])

  return (
    <>
      {
        status === "loading" ? (
          <TweetSkeleton />
        ) : (
          tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet} />)
        )
      }



    </>
  )
}
