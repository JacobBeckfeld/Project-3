import React from 'react';
import { Jumbotron } from 'reactstrap';
import Navigation from '../components/Navigation';

export default function Dashboard() {
  return (
    <Jumbotron>
      <h1 className="display-3">Dashboard</h1>
      <p className="lead">Hello, you like Diablo.</p>
      <Navigation />
    </Jumbotron>
  )
}