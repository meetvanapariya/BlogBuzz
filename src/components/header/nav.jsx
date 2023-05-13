import React from 'react';
import { Link } from 'react-router-dom';
const Nav = (route) => (
      <li className="nav-item">
        <Link
          to={route.navMenu.url}
          className="nav-link btn-outline-primary rounded-pill px-3"
          href="#"
        >
          {route.navMenu.name}
        </Link>
      </li>
)
export default Nav;