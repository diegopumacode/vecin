import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CommentSkeleton from '../../components/skeletons/CommentSkeleton'
import TweetForm from '../../components/TweetForm'
import Tweet from '../tweets/Tweet'
import { createComment, findByIdTweet } from './api'
import CommentTweet from './CommentTweet'

export default function Comment({ idTweet }) {
    const dispatch = useDispatch()
    const tweet = useSelector((state) => state.commentReducer.tweet)
    const comments = useSelector((state) => state.commentReducer.comments)
    const status = useSelector((state) => state.commentReducer.statusList)


    useEffect(() => {
        // TODO LIMPIAR PRIMERO TODO
        dispatch(findByIdTweet(idTweet))
    }, [idTweet])


    const formSubmit = (values, reset) => {
        console.log(values)
        dispatch(createComment({ comment: values, id: idTweet }))
        reset()
    }



    return (
        <Box>
            {
                status === "loading" | "idle" ? (
                    <CommentSkeleton/>
                ) : (
                    <>
                        <CommentTweet tweet={tweet} />
                        <TweetForm onFormSubmit={formSubmit} />
                        {
                            comments.map(comment => <Tweet tweet={comment} key={comment.id} rese />)
                        }
                    </>
                )
            }

        </Box>
    )
}
