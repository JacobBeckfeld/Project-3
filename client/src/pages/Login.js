import React from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Jumbotron, Row, Col } from 'reactstrap';
import Navigation from '../components/Navigation';

export default function Login() {
  return (
    <>
      <Jumbotron>
        <h1 className="display-3">Diablo Source</h1>
        <p className="lead">Hello, you like Diablo.</p>
        <Navigation />
      </Jumbotron>
      <Row xs="2" className="justify-content-center">
        <Col xs="5">
          <SignupForm />
        </Col>

        <Col xs="5">
          <LoginForm />
        </Col>
      </Row>
    </>
  )
}