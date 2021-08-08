import React from 'react'
import {NavLink} from 'react-router-dom'
import './stylesheets/Menu.css'

const Menu = () => {
    return (
        <div className='Header'>
            <NavLink exact activeClassName="active_navbar" to='/about' style={{textDecoration:"none"}} className='nav'>About US</NavLink>
            <NavLink exact activeClassName="active_navbar" to='/search' style={{textDecoration:"none"}} className='nav'>Search</NavLink>
            <NavLink exact activeClassName="active_navbar" to='/contact' style={{textDecoration:"none"}} className='nav'>Contact US</NavLink>
            <NavLink exact activeClassName="active_navbar" to='/user/thapa' style={{textDecoration:"none"}} className='nav'>User</NavLink>
        </div>
    )
}

export default Menu