import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Trends from '.'
import { trendsData } from './data'



test('renders content', () => {
    render(
        <Trends trends={trendsData}/>
    )
})