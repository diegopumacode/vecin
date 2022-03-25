import React from 'react'
import '@testing-library/jest-dom/extend-expect'


import TweetList from './TweetList'
import { render } from '../../utils/test-utils'

test('renders content', () => {
    render(<TweetList/>)
})