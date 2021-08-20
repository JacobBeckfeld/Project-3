import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../index.css';

export default function Navigation() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="d-flex flex-row">
          <Nav>
            <NavItem className="mx-1">
              <NavLink>
                <Link to="/">
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink><Link to="/dashboard">
                Dashboard
              </Link></NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink><Link to="/character">
                Character
              </Link></NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink><Link to="/search">
                Search
              </Link></NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink><a href="/" onClick={() => Auth.logout()}>
                Logout
              </a></NavLink>
            </NavItem>
          </Nav>
        </div>
      )
    } else {
      return (
        <div className="d-flex flex-row">
          <Nav>
            <NavItem className="mx-1">
              <NavLink><Link to="/login">
                Login / Signup
              </Link></NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink><Link to="/home">
                Home
              </Link></NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink><Link to="/character">
                Character
              </Link></NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink><Link to="/search">
                Search
              </Link></NavLink>
            </NavItem>
          </Nav>
        </div>
      )
    }
  }

  return (
    <div className="flex-row px-1">
      {showNavigation()}
    </div>
  )
}