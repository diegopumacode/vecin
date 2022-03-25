import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import TweetSkeleton from '../../components/skeletons/TweetSkeleton'
import useGetTweets from '../../hooks/useGetTweets'
import useNearScreen from '../../hooks/useNearScreen'

import debounce from 'just-debounce-it'
import Tweet from './Tweet'
import { Center, Spinner } from '@chakra-ui/react'

export default function TweetList() {

  const [page, setPage] = useState(1)

  const { data, isLoading, isLoadingSteps } = useGetTweets(page)

  const externalRef = useRef()

  const { isNearScreen } = useNearScreen({
    externalRef: isLoading ? null : externalRef,
    once: false
  })

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(function () {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])




  return (
    <>

      {
        isLoading
          ? <TweetSkeleton />
          : <>
            {
              data?.items?.map((tweet, i) => {
                return <Tweet key={tweet.id + new Date().getUTCDate} tweet={tweet} />
              })
            }
          </>
      }
      <div id="visor" ref={externalRef}>
        <Center>
          {isLoadingSteps && <Spinner />}
        </Center>
      </div>

    </>
  )
}
