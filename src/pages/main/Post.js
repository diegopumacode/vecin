import { Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import Comment from '../../features/comment/Comment'
import { AiFillLeftCircle } from "react-icons/ai";
import { createBrowserHistory } from 'history';

export default function Post() {
    let params = useParams()
    let history = createBrowserHistory()

    return (
        <div>
            
            <Flex gap={4} alignItems='center' marginBottom={5}>
                <IconButton icon={<AiFillLeftCircle />} onClick={()=> history.back()}>
                    back
                </IconButton>
                <Text fontSize='lg' fontWeight={'bold'}>Tweet</Text>
            </Flex>
            <Comment idTweet={params.id} />
        </div>
    )

}
