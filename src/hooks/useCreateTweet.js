import { useDispatch, useSelector } from 'react-redux'
import { fetchCreateTweet } from '../services/tweetApi';
import { resetCreateStatus } from '../services/tweetSlice';

export default function useCreateTweet() {


    const dispatch = useDispatch()
    const statusCreateTweet = useSelector(state => state.tweets.statusCreateTweet);


    const createTweet = (body) => {
        dispatch(fetchCreateTweet({body}))
    }

    const resetStatus = () => {
        dispatch(resetCreateStatus())
    }

    const isLoading = statusCreateTweet === 'loading' || statusCreateTweet === 'ídle'
    const isSuccess = statusCreateTweet === 'succeded'

    return { createTweet, isLoading, isSuccess, resetStatus }

}
