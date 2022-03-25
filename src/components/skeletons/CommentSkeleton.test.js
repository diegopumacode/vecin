import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

import CommentSkeleton from './CommentSkeleton'

test('renders content', () => {
    render(
        <CommentSkeleton />
    )
})