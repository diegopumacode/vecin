import { useDispatch, useSelector } from 'react-redux';
import { fetchLike } from '../services/tweetApi';


export default function useLike() {


    const dispatch = useDispatch()
    const statusLike = useSelector(state => state.tweets.statusLike);


    const createLike = (id) => {
        let itemsLikes = localStorage.getItem('likes')

        let toggle = false
        if (!itemsLikes) {
            localStorage.setItem("likes", JSON.stringify([id]))
            toggle = false
        } else {
            let parseItemsLikes = JSON.parse(itemsLikes)
            let valor = parseItemsLikes.filter(item => item !== id)
            if (parseItemsLikes.length === valor.length) {
                valor.push(id)
                toggle = false
            } else {
                toggle = true
            }

            localStorage.setItem("likes", JSON.stringify(valor))
        }
        dispatch(fetchLike({ id, toggle }))

    }

    const resetStatus = () => {
        // dispatch(resetCreateStatus())
    }

    const isLoading = statusLike === 'loading' || statusLike === 'ídle'
    const isSuccess = statusLike === 'succeded'

    return { createLike, isLoading, isSuccess, resetStatus }

}
