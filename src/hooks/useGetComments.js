import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments} from '../services/tweetApi';

export default function useGetComments(idPost) {

    const dispatch = useDispatch()
    const statusFindComments = useSelector(state => state.tweets.statusFindComments);
    const data = useSelector(state => state.tweets.comments);

    useEffect(() => {
        if (statusFindComments === "idle" || statusFindComments === "succeded") {
            dispatch(fetchComments({ idPost }))
        }

    }, [idPost])


    const reset = () => {
        dispatch(fetchComments({ idPost }))
    }

    const isLoading = statusFindComments === 'loading' || statusFindComments === 'ídle'
    const isSuccess = statusFindComments === 'succeded'

    return { data, isLoading, isSuccess, reset}

}
