import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from '../../components/Content'
import Navbar from '../../components/navbar'

export default function Main() {
    return (
        <>
            <Navbar />
            <Content>
                <Outlet />
            </Content>
        </>
    )
}
