import React from 'react'
import { AiOutlineComment } from "react-icons/ai";
import { Avatar, Flex, Text } from '@chakra-ui/react'

export default function CommentTweet({tweet}) {
    
    return (
        <Flex
            gridGap={3}
            paddingY={5}
            paddingX={1}
            borderBottom='1px solid'
            borderColor='#D6D1D7'
            flexDirection='column'>
            <Avatar name={tweet.email} />

            <Flex flexDirection='column'>
                <Text
                    fontWeight='bold'
                    fontSize='sm'
                >
                    {tweet.title}
                </Text>
                <Text
                    variant='info'>
                    {tweet.email}
                </Text>

                <Text fontSize='2xl' marginTop={2}>
                    {tweet.content}
                </Text>
                <Text display={'flex'} gap={2} alignItems={'center'} fontWeight='bold'>
                    <AiOutlineComment/>
                    {tweet.comments}
                </Text>
            </Flex>
        </Flex>
    )
}
