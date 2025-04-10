import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = () => {
  return (
    <header> <nav>
    <ul>
      <li>
        <NavLink to="/chess">chess</NavLink>
      </li>
      <li>
        <NavLink to="/draughts">Draughts</NavLink>
      </li>
    </ul>
  </nav></header>
  )
}

export default Header