import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Content({ children, ...props }) {
    return (
        <Box
            margin='auto'
            maxWidth={{ base: '100%', xl: '6xl' }}
            paddingX={5}
            {...props}>
            {children}
        </Box>
    )
}
