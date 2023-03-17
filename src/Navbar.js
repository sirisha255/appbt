import React from 'react';
import './Styles.css';

function Navbar() {
    return <nav className='nav'>
    <a href='/' className='site-title'>Brand Transparency</a>
    <ul>
        <li>
            <a href='/admin'>Admin</a>
        </li>
        <li> 
            <a href='/user'>User</a>
        </li>
    </ul>
  </nav>
}

export default Navbar;
