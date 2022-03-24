import { Box } from '@chakra-ui/react'
import React from 'react'
import TweetSkeleton from '../../components/skeletons/TweetSkeleton'
import TweetCreate from '../../features/tweets/TweetCreate'
import TweetList from '../../features/tweets/TweetList'

export default function Posts() {
    return (
        <Box>
            <TweetList />
        </Box>
    )
}
