import React from 'react'
import '@testing-library/jest-dom/extend-expect'


import NavBar from './'
import { render } from '../../utils/test-utils'
import { MemoryRouter} from 'react-router-dom'

test('renders content', () => {

    const component = render(
        <MemoryRouter>
            <NavBar/>
        </MemoryRouter>)

    component.getByText('Mi Perfil')
    component.getByText('Mensajes')
    component.getByText('Grupos')
})