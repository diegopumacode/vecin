import React from 'react'
import '@testing-library/jest-dom/extend-expect'


import { MemoryRouter} from 'react-router-dom'
import TweetForm from '.'
import { render } from '../../utils/test-utils'

test('renders content', () => {

    render(
        <MemoryRouter>
            <TweetForm/>
        </MemoryRouter>)
})