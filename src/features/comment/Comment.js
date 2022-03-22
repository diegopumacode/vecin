import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TweetForm from '../../components/TweetForm'
import Tweet from '../tweets/Tweet'
import { findByIdTweet } from './api'
import CommentTweet from './CommentTweet'

export default function Comment({ idTweet }) {
    const dispatch = useDispatch()
    const tweet = useSelector((state) => state.commentReducer.tweet)
    const comments = useSelector((state) => state.commentReducer.comments)

    useEffect(() => {
        // TODO LIMPIAR PRIMERO TODO
        dispatch(findByIdTweet(idTweet))
    }, [idTweet])



    return (
        <Box>
            <CommentTweet tweet={tweet} />
            <TweetForm/>
            {
                comments.map(comment => <Tweet tweet={comment} key={comment.id}/>)
            }
        </Box>
    )
}
