import { Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useTweetsQuery } from '../../api/tweetsApi'
import TweetSkeleton from '../../components/skeletons/TweetSkeleton'


import Tweet from './Tweet'

export default function TweetList() {

  const [page, setPage] = useState(1)

  const { data, error, isLoading, currentData, isFetching } = useTweetsQuery({ page:1 })


  // const { combinedData, readMore, refresh} = useInfiniteScroll(useTweetsQuery)
  // console.log(combinedData, refresh)
  return (
    <>

      {
        isLoading
          ? <div>asdasd</div>
          : <>
            {
              data?.items?.map((tweet) => {
                return <Tweet key={tweet.id} tweet={tweet} />
              })
            }</>
      }


      {/* <Button onClick={readMore}>
        Leer mas
      </Button> */}
    </>
  )
}
