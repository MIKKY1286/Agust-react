import React from 'react'
import { Sidebar } from '../component/sidebar'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div>
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ padding: '40px', flex: 1 }}>
                <Outlet />
            </div>
        </div>
    </div>
  )
}
