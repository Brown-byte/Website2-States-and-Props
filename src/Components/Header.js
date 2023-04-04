import React from 'react';
import Bar from '../images/bars.png';
import '../css/Header.css';

function Header () {
    return(
        <header>
            <nav>
            <ul>
          <li><a href="#">Gmail</a></li>
          <li><a href="#">Images</a></li>
          <li><a href="#"><img src= {Bar} /></a></li>
          <li><button>Sign In</button></li>
            </ul>
            </nav>
        </header>
    );
}

export default Header;