import React from 'react'
import { Outlet } from 'react-router-dom'
import Content from '../../components/Content'
import Navbar from '../../components/navbar'
import Trends from '../../components/trends'

export default function Main() {
    return (
        <>
            <Navbar />
            <Content marginTop={5}>
                <Outlet />
                <Trends/>
            </Content>
        </>
    )
}
