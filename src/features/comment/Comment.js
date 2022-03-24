import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAddCommentTweetMutation, useTweetQuery } from '../../api/tweetsApi'
import CommentSkeleton from '../../components/skeletons/CommentSkeleton'
import TweetForm from '../../components/TweetForm'
import Tweet from '../tweets/Tweet'
import { createComment, findByIdTweet } from './api'
import CommentTweet from './CommentTweet'

export default function Comment({ idTweet }) {

    const { data, error, isLoading, currentData } = useTweetQuery(idTweet)
    const [addCommentTweet] = useAddCommentTweetMutation()

    const formSubmit = async (values, reset) => {
        console.log(values)
        let data = {
            idTweet,
            values
        }
        addCommentTweet(data)
    }

    return (
        <Box>

            <>
                {
                    isLoading
                        ? <CommentSkeleton />
                        : <>

                            <CommentTweet tweet={data} />
                            <TweetForm onFormSubmit={formSubmit} />
                            {
                                data.commendsList.map(comment => <Tweet tweet={comment} key={comment.id} rese />)
                            }
                        </>
                }
            </>

        </Box>
    )
}
