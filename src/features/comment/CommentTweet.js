import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function CommentTweet({tweet}) {
    return (
        <Flex
            gridGap={3}
            paddingY={5}
            paddingX={1}
            cursor='pointer'
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
                {/* <Flex gridGap={5} marginTop={2}>
                    <ActionStyled>
                        <div>
                            <AiFillLike />
                        </div>
                        {tweet.likes}
                    </ActionStyled>
                    <Flex cursor='pointer' alignItems='center' gridGap={2} color='#8E8B8F'>
                        <AiFillDislike />
                    </Flex>
                </Flex> */}
            </Flex>
        </Flex>
    )
}
