import React from 'react'
import { Avatar, Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Content from '../Content'
import { Link } from 'react-router-dom'


export default function Navbar({children}) {
    return (
        <Box paddingY={5} background='brand' >
            <Content
                display='flex'
                justifyContent='space-between'
                alignItems='center'>
                <Logo />
                <Flex gap={5} justifyContent='space-between' alignItems='center'>
                    {children}
                    <Actions />
                </Flex>
            </Content>
        </Box>
    )
}

const Logo = () => (
    <Link to='/'>
        <Text fontWeight='600' fontSize={['xl','2xl']} color='primary' cursor={'pointer'}>
            <Text as='span' fontWeight='bold'>Vecin</Text>Tw
        </Text>
    </Link>
)

const Actions = () => (
    <Menu>
        <MenuButton>
            <Avatar name='Dan Abrahmov' size="md" src='https://bit.ly/dan-abramov' />
        </MenuButton>
        <MenuList>
            <MenuItem as={Link} to='/profile'>
                Mi Perfil
            </MenuItem>
            <MenuItem as={Link} to='/messages'>
                Mensajes
            </MenuItem>
            <MenuItem as={Link} to='/groups'>
                Grupos
            </MenuItem>
        </MenuList>
    </Menu>
)