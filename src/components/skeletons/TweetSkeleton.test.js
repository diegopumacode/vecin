import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import TweetSkeleton from './TweetSkeleton'

test('renders content', () => {
    render(
        <TweetSkeleton />
    )
})