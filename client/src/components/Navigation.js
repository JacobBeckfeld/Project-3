import React from 'react';
import Auth from '../utils/auth';
// import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../index.css';

export default function Navigation() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="d-flex flex-row">
          <Nav>
            <NavItem className="mx-1">
              <NavLink href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink href="/dashboard">
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink href="/character">
                Character
              </NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink href="/search">
                Search
              </NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink href="/" onClick={() => Auth.logout()}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      )
    } else {
      return (
        <div className="d-flex flex-row">
          <Nav>
            <NavItem className="mx-1">
              <NavLink href="/login">
                Login / Signup
              </NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink href="/character">
                Character
              </NavLink>
            </NavItem>
            <NavItem className="mx-1">
              <NavLink href="/search">
                Search
              </NavLink>
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