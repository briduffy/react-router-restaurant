import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    {' '}
    <Link to="/details">Details</Link>
  </nav>
)

export default NavBar