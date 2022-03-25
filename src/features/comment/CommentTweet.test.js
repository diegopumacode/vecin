import React from 'react'
import '@testing-library/jest-dom/extend-expect'


import CommentTweet from './CommentTweet'
import { render } from '../../utils/test-utils'

test('renders content', () => {

    const tweet = {
        email: 'diegopumacode',
        title: 'React',
        content: 'React is a JavaScript library for building user interfaces.',
        comments: 0
    }
    render(<CommentTweet tweet={tweet}/>)
})