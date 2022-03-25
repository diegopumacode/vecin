import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFindTweets } from '../services/tweetApi';

export default function useGetTweets(page) {


    const dispatch = useDispatch()
    const statusFindTweet = useSelector(state => state.tweets.statusFindTweet);
    const statusLoadingTweet = useSelector(state => state.tweets.statusLoadingTweet);
    
    const data = useSelector(state => state.tweets.data);

    useEffect(() => {
      if (statusFindTweet === "idle") {
          
          dispatch(fetchFindTweets({currentPage:page}))
      }
    
    }, [page])
    
    const isLoading = statusFindTweet === 'loading' || statusFindTweet === 'ídle'
    const isLoadingSteps = statusLoadingTweet === 'loading' || statusLoadingTweet === 'ídle'
    const isSuccess = statusFindTweet === 'succeded'

    return { data , isLoading, isSuccess,isLoadingSteps}
    
}
