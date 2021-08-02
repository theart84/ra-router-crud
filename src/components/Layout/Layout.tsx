// Core
import React from "react";
import {NavLink} from "react-router-dom";

// Assets
import brand from '../../assets/chat-left-text.svg'

const Layout: React.FC = ({children}) => {
  return (
    <>
      <nav className="navbar navbar-light bg-primary mb-5">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={brand} alt="" width="30" height="24"/>AstroPosts
          </NavLink>
          <div className="navbar" id="navbarNav">
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item" style={{marginRight: 15}}>
                <NavLink className="nav-link" activeClassName="active" to="/posts/new">New Post</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
    </>
  )
}

// Exports
export default Layout;
