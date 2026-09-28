import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <header>
            <nav style={{backgroundColor: "#0a0a0aff", border:"thin solid black", display:"flex", padding:"20px 30px", height:"30px", alignItems:"center", fontFamily: "san-seriff", width:"60%", borderRadius:"50px",  margin:"auto", justifyContent:"center", color:"white"}}>
                <div>
                    <p>Logo</p>
                </div>
                <ul style={{display:"flex", justifyContent:"space-around", alignItems:"center",width:"100%", listStyle:"none"}}>
                    <li><Link style={{color: "white", textDecoration: "none"}} to="/">Home</Link></li>
                    <li><Link style={{color: "white", textDecoration: "none"}} to="/about">About</Link></li>
                    <li><Link style={{color: "white", textDecoration: "none"}} to="/contact">Contact</Link></li>
                    <li><Link style={{color: "white", textDecoration: "none"}} to="/dashboard">Dashboard</Link></li>
                    <li><Link style={{color: "white", textDecoration: "none"}} to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}
