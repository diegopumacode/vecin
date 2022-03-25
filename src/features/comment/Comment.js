import React from 'react'
import CommentSkeleton from '../../components/skeletons/CommentSkeleton'
import TweetForm from '../../components/tweetForm'
import useCreateComment from '../../hooks/useCreateComment'
import useGetComments from '../../hooks/useGetComments'
import useGetTweetById from '../../hooks/useGetTweetById'
import Tweet from '../tweets/Tweet'
import CommentTweet from './CommentTweet'
import { Box } from '@chakra-ui/react'

export default function Comment({ idTweet }) {

    const { data, isLoading } = useGetTweetById(idTweet)
    const { data: comments, isLoading: isLoadingComments, reset } = useGetComments(idTweet)
    const { createTweet, isLoading: isLoadingCreateComment, isSuccess: isSuccessCreateComment } = useCreateComment()

    const formSubmit = async (item) => {
        createTweet({ id: idTweet, body: item })
    }

    const actionAfterSubmit = () => {
        reset()
    }

    return (
        <Box>
            <>
                {
                    isLoading
                        ? <CommentSkeleton />
                        : <>

                            <CommentTweet tweet={data} />
                            <TweetForm onFormSubmit={formSubmit} isLoading={isLoadingCreateComment} isSuccess={isSuccessCreateComment} actionAfterSubmit={actionAfterSubmit} />

                        </>
                }

                {
                    isLoadingComments
                        ? <CommentSkeleton />
                        : <>{
                            comments?.map(comment => <Tweet tweet={comment} key={comment.id} rese />)
                        }</>
                }
            </>
        </Box>
    )
}
