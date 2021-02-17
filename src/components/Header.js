import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navigation">
          
          <Link to='/' className="item">@opheliagame</Link>
          
          <Link to='/about' className="item">about me</Link>

        </div>
    )
}

export default Header