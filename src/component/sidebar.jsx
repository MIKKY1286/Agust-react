import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div style={{ width: '250px', minHeight: '100vh', backgroundColor: '#0a0a0a', color: 'white', padding: '30px', display: 'flex', flexDirection: 'column' }}>
        <ul className='sidebar' style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <li><Link style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }} to="/dashboard">Overview</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }} to="/dashboard/profile">Profile</Link></li>
            <li><Link style={{ color: 'white', textDecoration: 'none', fontSize: '18px' }} to="/dashboard/settings">Settings</Link></li>
        </ul>
        
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', marginTop: 'auto' }}>
            <li><Link style={{ color: '#aaa', textDecoration: 'none', fontSize: '18px' }} to="/">Back to Home</Link></li>
        </ul>
    </div>
  )
}
