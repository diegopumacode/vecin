import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import formatInteger from '../../utils/formatInteger'
import { trendsData } from './data'

export default function Trends() {
    return (
        <Box background='secondary' padding={5} borderRadius='.8rem' position={'sticky'} top='20px'>
            <Text
                fontSize='xl'
                fontWeight='bold'
                color=''
                marginBottom={2}>
                Trends for you
            </Text>
            <Flex flexDirection={'column'}>
                {
                    trendsData.map(trend=>(
                        <Box paddingY={2} key={trend.id}>
                            <Text variant='info'>Trending in {trend.ubication}</Text>
                            <Text fontWeight={'bold'}>#{trend.hash}</Text>
                            <Text variant='info'>{formatInteger(trend.tweets)} Tweets</Text>
                        </Box>
                    ))
                }
                
            </Flex>
        </Box>
    )
}
