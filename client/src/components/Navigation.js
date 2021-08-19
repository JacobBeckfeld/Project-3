import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {  } from 'reactstrap';
import '../index.css';

export default function Navigation() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      )
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/login">
              Login / Signup
            </Link>
          </li>
        </ul>
      )
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          Home
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  )
}