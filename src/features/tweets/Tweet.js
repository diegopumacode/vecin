import React from 'react'

import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import styled from '@emotion/styled';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function Tweet({ tweet }) {
    return (
        <Link to={`/post/${tweet.id}`}>
            <Flex
                gridGap={3}
                paddingY={5}
                paddingX={1}
                cursor='pointer'
                borderBottom='1px solid'
                borderColor='#D6D1D7'
                _hover={{
                    background: '#F7FBFE'
                }}>
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

                    <Text fontSize='sm' marginTop={2}>
                        {tweet.content}
                    </Text>
                    <Flex gridGap={5} marginTop={2}>
                        <ActionStyled>
                            <div>
                                <AiFillLike />
                            </div>
                            {tweet.likes}
                        </ActionStyled>
                        <Flex cursor='pointer' alignItems='center' gridGap={2} color='#8E8B8F'>
                            <AiFillDislike />
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    )
}


const ActionStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    cursor: pointer;
    color: #8E8B8F;
    &:hover{
        color: #1977F2;
        font-weight: 600;
        div{
            background-color: #E1EEF6;
        }
    }
    div{
        padding: 10px;
        border-radius: 50%;
    }

`