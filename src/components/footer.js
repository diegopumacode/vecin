import { Box } from '@chakra-ui/react'
import React from 'react'
import Content from './Content'

export default function Footer() {
  return (
    <Box bg='brand' position='absolute' bottom={0} width='100%'>
        <Content paddingY={3} fontWeight='bold' fontSize='xs'>
            hecho con esfuerzo por diego ❤️‍🔥❤️‍🔥
        </Content>
    </Box>
  )
}
