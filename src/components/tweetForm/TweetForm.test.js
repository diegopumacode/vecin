import React from 'react'
import '@testing-library/jest-dom/extend-expect'


import { MemoryRouter } from 'react-router-dom'
import TweetForm from '.'
import { render } from '../../utils/test-utils'
import {fireEvent} from '@testing-library/react'

test('renders content', () => {
    console.log("awita")
    const data = {
        titleSubmit: 'submit',
    }
    const component = render(


        <MemoryRouter>
            <TweetForm titleSubmit={data.titleSubmit} onFormSubmit={() => {
                console.log("sucees")
            }} />

        </MemoryRouter>)

    const button = component.getByText(data.titleSubmit)
    fireEvent.click(button)

})