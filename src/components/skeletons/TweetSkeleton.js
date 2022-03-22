import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export default function TweetSkeleton() {
    return (
        <>
            <Box paddingY='6' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={3} spacing='4' />
            </Box>
            <Box paddingY='6' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={3} spacing='4' />
            </Box>
            <Box paddingY='6' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={3} spacing='4' />
            </Box>
            <Box paddingY='6' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={3} spacing='4' />
            </Box>
            <Box paddingY='6' >
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={3} spacing='4' />
            </Box>
        </>
    )
}
