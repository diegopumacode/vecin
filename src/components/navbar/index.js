import React from 'react'
import { Avatar, Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Content from '../Content'
import ModalButton from '../ModalButton'
import TweetCreate from '../../features/tweets/TweetCreate'


export default function Navbar() {
    return (
        <Box paddingY={5} background='brand' >
            <Content
                display='flex'
                justifyContent='space-between'
                alignItems='center'>
                <Logo />
                <Flex gap={5} justifyContent='space-between' alignItems='center'>
                    <ModalButton titleModal="Publicar post" buttontitle={'Publicar Post'}>
                        <TweetCreate/>
                    </ModalButton>
                    <Actions />
                </Flex>
            </Content>
        </Box>
    )
}

const Logo = () => (
    <Text fontWeight='600' fontSize='2xl' color='primary'>
        <Text as='span' fontWeight='bold'>Vecin</Text>Tw
    </Text>
)

const Actions = () => (
    <Menu>
        <MenuButton>
            <Avatar name='Dan Abrahmov' size="md" src='https://bit.ly/dan-abramov' />
        </MenuButton>
        <MenuList>
            <MenuItem>
                Mi Perfil
            </MenuItem>
            <MenuItem>
                Mensajes
            </MenuItem>
        </MenuList>
    </Menu>
)