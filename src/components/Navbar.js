import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id='header'>
      <div className='container'>
        <nav id='main-nav'>
          <h1 className='nav-name'>MUHAMMET GOK</h1>
          <ul>
            <li className='current'>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/showreel'>Showreel</Link>
            </li>
            <li>
              <Link to='/gallery'>Galleries</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
