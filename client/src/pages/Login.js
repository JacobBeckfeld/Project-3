import React from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { Row, Col } from 'reactstrap';

export default function Login() {
  return (
    <Row xs="2" className="justify-content-center">
      <Col xs="5">
        <SignupForm />
      </Col>

      <Col xs="5">
        <LoginForm />
      </Col>
    </Row>
  )
}