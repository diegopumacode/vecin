import React from 'react'
import '@testing-library/jest-dom/extend-expect'


import Tweet from './Tweet'
import { render } from '../../utils/test-utils'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

test('renders content', () => {
    const tweet = {
        id: 1,
        email: 'test',
        title: '2020-01-01',
        created: '2020-01-01',
        content: 'test',
        likes: 0,
        dislikes: 0,
        comments: 0
    }

    render(
        <MemoryRouter>
            <Tweet tweet={tweet} />
        </MemoryRouter>)
})