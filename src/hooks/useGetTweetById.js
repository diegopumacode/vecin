import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFindTweetById } from '../services/tweetApi';

export default function useGetTweetById(id) {

    const dispatch = useDispatch()
    const statusFindTweetById = useSelector(state => state.tweets.statusFindTweetById);
    const data = useSelector(state => state.tweets.item);

    useEffect(() => {
        if (statusFindTweetById === "idle" || statusFindTweetById === "succeded") {
            dispatch(fetchFindTweetById({ id }))
        }

    }, [id])

    const isLoading = statusFindTweetById === 'loading' || statusFindTweetById === 'ídle'
    const isSuccess = statusFindTweetById === 'succeded'

    return { data, isLoading, isSuccess }

}
