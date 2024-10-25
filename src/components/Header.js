
import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
return (
<header>
        <div className="logo">
            <h2>My Portfolio</h2>
        </div>

        <div className="nav">
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/work'>Work</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>

                </ul>
            </nav>
        </div>
</header>
)
};

export default Header; 