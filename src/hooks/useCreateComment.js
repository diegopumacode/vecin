import { fetchCreateComment } from '../services/tweetApi';
import { useDispatch, useSelector } from 'react-redux'

export default function useCreateComment() {
    const dispatch = useDispatch()
    const statusCreateComment = useSelector(state => state.tweets.statusCreateComment);


    const createTweet = ({id,body}) => {
        dispatch(fetchCreateComment({ id, body }))
    }

    const resetStatus = () => {
        console.log("reset")
    }

    const isLoading = statusCreateComment === 'loading' || statusCreateComment === 'ídle'
    const isSuccess = statusCreateComment === 'succeded'

    return { createTweet, isLoading, isSuccess, resetStatus }
}
