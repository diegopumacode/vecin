import React from 'react'
import '@testing-library/jest-dom/extend-expect'


import Comment from './Comment'
import { render } from '../../utils/test-utils'

test('renders content', () => {
    render(<Comment />)
})