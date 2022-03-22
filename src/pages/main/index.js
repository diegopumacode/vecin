import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from '../../components/Content'
import Navbar from '../../components/navbar'
import Trends from '../../components/trends'
import { Box } from '@chakra-ui/react'

export default function Main() {
    return (
        <>
            <Navbar />
            <Content marginTop={5} display='flex' gap={'3rem'}>
                <Box flex={[1, 1, 3]}>
                    <Outlet />
                </Box>
                <Box flex={1} display={["none", "none", "block"]}>
                    <Trends />
                </Box>
            </Content>
        </>
    )
}
