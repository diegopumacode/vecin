import React from 'react'
import '@testing-library/jest-dom/extend-expect'


import TweetCreate from './TweetCreate'
import { render } from '../../utils/test-utils'

test('renders content', () => {
    render(<TweetCreate/>)
})