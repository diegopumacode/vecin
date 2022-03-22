import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main'
import Groups from './pages/main/Groups'
import Messages from './pages/main/Messages'
import Posts from './pages/main/Posts'
import Profile from './pages/main/Profile'
import NotFound from './pages/NotFound'

export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route path="" element={<Posts />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="messages" element={<Messages />} />
                    <Route path="groups" element={<Groups />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
