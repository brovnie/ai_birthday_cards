import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full flex justify-between items-center">
        <Link to="/">Logo</Link>
        <nav className='flex justify-right items-center'>
            <Link to="/">Home</Link>
            <Link to="/create-card">Create Card</Link>
        </nav>
    </header>
  )
}

export default Header
