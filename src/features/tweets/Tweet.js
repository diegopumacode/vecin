import React, { useImperativeHandle } from 'react'

import { Avatar, Box, Button, Flex, Spinner, Text } from '@chakra-ui/react'
import styled from '@emotion/styled';
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { likeTweet } from './tweetSlice';
import { useDisLikeMutation, useDisLikeTweetMutation, useLikeMutation, useLikeTweetMutation } from '../../api/tweetsApi';
export default function Tweet({ tweet }) {


    let [dislike, { isLoading: isLoadingdisLike }] = useDisLikeMutation()
    let [like, { isLoading: isLoadingLike }] = useLikeMutation()


    const reactionLike = async () => {
        try {
            await like(tweet.id)
        } catch (error) {
            alert(error)
        }

    }

    const reactiondisLike = async () => {
        console.log("aaaaaaaaaaaa")
        try {
            await dislike(tweet.id)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Flex
            gridGap={3}
            paddingY={5}
            paddingX={1}
            cursor='pointer'
            borderBottom='1px solid'
            borderColor='#D6D1D7'
            zIndex={1}

            _hover={{
                background: '#F7FBFE'
            }}>
            <Avatar name={tweet.email} />
            <Flex flexDirection='column'>
                <Link to={`/post/${tweet.id}`} >
                    <Text
                        fontWeight='bold'
                        fontSize='sm'
                    >
                        {tweet.id}
                        {tweet.title}
                    </Text>
                    <Text
                        variant='info'>
                        {tweet.email}
                    </Text>
                </Link>

                <Text fontSize='sm' marginTop={2}>
                    {tweet.content}
                </Text>
                <Flex gridGap={5} marginTop={2} zIndex={2} >
                    {/* TODO : convertir en un componente action*/}
                    <ActionStyled onClick={reactionLike} disabled={isLoadingLike ? true : false}>
                        <div>
                            <AiFillLike />
                        </div>
                        {isLoadingLike ? <Spinner size='xs' /> : tweet.likes}

                    </ActionStyled>
                    <ActionStyled onClick={reactiondisLike} disabled={isLoadingdisLike ? true : false}>
                        <AiFillDislike />
                        {isLoadingdisLike ? <Spinner size='xs' /> : tweet.dislikes}
                    </ActionStyled>



                </Flex>
            </Flex>
        </Flex>
    )
}


const ActionStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    cursor: pointer;
    color:${(props) => props.active ? '#1977F2' : '#8E8B8F'};

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
        background-color:${(props) => props.active ? '#E1EEF6' : 'transparent'} ;
    }

`