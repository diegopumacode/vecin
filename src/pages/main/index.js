import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <h1>Main</h1>
        <Outlet/>
    </div>
  )
}
