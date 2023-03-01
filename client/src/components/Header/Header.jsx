import React from 'react'
import { Link } from "react-router-dom";
import { logo } from "../../assets/index";
import Container from '../../layouts/Container';
const Header = () => {
  return (
    <header className="w-full ">
        <Container className="flex justify-between items-center">
            <Link to="/"> <img src={logo} alt="logo" className="w-12 object-contain" /></Link>
            <nav className='flex justify-right items-center'>
                <Link to="/">Home</Link>
                <Link to="/create-card">Create Card</Link>
                
            </nav>
        </Container>
    </header>
  )
}

export default Header
