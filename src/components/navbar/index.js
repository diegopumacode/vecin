import React from 'react'
import { Avatar, Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Content from '../Content'


export default function Navbar() {
    return (
        <Box paddingY={5} background='brand' >
            <Content
                display='flex'
                justifyContent='space-between'
                alignItems='center'>
                <Logo />
                <Flex gap={5} justifyContent='space-between' alignItems='center'>
                    <Button type='button' size='sm' variant='primary'>
                        Realizar Tweets
                    </Button>
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