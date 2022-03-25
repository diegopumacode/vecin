import { useDispatch, useSelector } from 'react-redux';
import { fetchDisLike } from '../services/tweetApi';


export default function useDisLike() {


    const dispatch = useDispatch()
    const statusdisLike = useSelector(state => state.tweets.statusDisLike);


    const createDisLike = (id) => {
        let itemsDisLikes = localStorage.getItem('disLikes')
        let toggle = false
        if (!itemsDisLikes) {
            localStorage.setItem("disLikes", JSON.stringify([id]))
            toggle = false
        } else {
            let parseItemsDisLikes = JSON.parse(itemsDisLikes)
            let valor = parseItemsDisLikes.filter(item => item !== id)
            if (parseItemsDisLikes.length === valor.length) {
                valor.push(id)
                toggle = false
            } else {
                toggle = true
            }

            localStorage.setItem("disLikes", JSON.stringify(valor))
        }
        dispatch(fetchDisLike({ id, toggle  }))
    }

    const resetStatus = () => {
        // dispatch(resetCreateStatus())
    }

    const isLoading = statusdisLike === 'loading' || statusdisLike === 'ídle'
    const isSuccess = statusdisLike === 'succeded'

    return { createDisLike, isLoading, isSuccess, resetStatus }

}
