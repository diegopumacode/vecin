import React from 'react'

import styled from '@emotion/styled';
import { Avatar, Button, Flex, Text } from '@chakra-ui/react'
import { AiFillLike, AiFillDislike, AiOutlineComment } from "react-icons/ai";
import { Link } from 'react-router-dom';
import useLike from '../../hooks/useLike';
import useDisLike from '../../hooks/useDislike';

export default function Tweet({ tweet }) {

    const { createLike, isLoading: isLoadingLike } = useLike()
    const { createDisLike, isLoading: isLoadingdisLike } = useDisLike()



    const reactionLike = async () => {
        try {
            await createLike(tweet.id)
        } catch (error) {
            alert(error)
        }

    }

    const reactiondisLike = async () => {
        console.log("aaaaaaaaaaaa")
        try {
            await createDisLike(tweet.id)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Flex
            gridGap={3}
            paddingY={5}
            paddingX={1}
            borderBottom='1px solid'
            borderColor='#D6D1D7'
            zIndex={1}>
            <Avatar name={tweet.email} />
            <Flex flexDirection='column'>
                <Link to={`/post/${tweet.id}`} >
                    <Text
                        cursor='pointer'
                        fontWeight='bold'
                        fontSize='lg'
                        _hover={{ color: 'primary' }}
                    >
                        {tweet.title}
                    </Text>
                </Link>
                <Text variant='info' fontWeight={'bold'} >
                    {new Date(tweet?.created).toLocaleDateString()} -  {new Date(tweet?.created).toLocaleTimeString()}
                </Text>
                <Text
                    variant='info'>
                    {tweet.email}
                </Text>

                <Text fontSize='sm' marginTop={2}>
                    {tweet.content}
                </Text>
                <Flex gridGap={5} marginTop={2} zIndex={2} flexDirection={["column","column","row"]}>
                    <Flex>
                        <ActionStyled active={tweet.activelike} onClick={reactionLike} disabled={isLoadingLike ? true : false}>
                            <div>
                                <AiFillLike />
                            </div>
                            {tweet.likes}

                        </ActionStyled>
                        <ActionStyled active={tweet.activedislike} onClick={reactiondisLike} disabled={isLoadingdisLike ? true : false}>
                            <div>
                                <AiFillDislike />
                            </div>
                            {tweet.dislikes}
                        </ActionStyled>
                    </Flex>
                    <Button as={Link} size={'sm'} to={`/post/${tweet.id}`}>
                        <Flex gap={2} justifyContent='center' alignItems={'center'}>
                            {tweet.comments}
                            <AiOutlineComment />
                            Agregar Comentario
                        </Flex>
                    </Button>
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
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 10px;
    }

`