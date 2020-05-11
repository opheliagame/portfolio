import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navigation">
          <h2 className="title">anushka</h2>
          
          <Link to='/about' className="item">about me</Link>

        </div>
    )
}

export default Header