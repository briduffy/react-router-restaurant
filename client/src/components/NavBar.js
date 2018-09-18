import React from 'react'
import { NavLink } from 'react-router-dom'

const styles = {
  active: {
    fontWeight: 'bold',
    backgroundColor: 'grey',
    color: 'white',
    textDecoration: 'none',
  }
}

const NavBar = () => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/details">Details</NavLink>
    {' '}
    <NavLink activeStyle={styles.active} to="/menu">Menu</NavLink>
  </nav>
)

export default NavBar