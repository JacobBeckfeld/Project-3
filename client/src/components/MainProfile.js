import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export default function mainProfile() {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Hello, </h1>
          <p class="lead">Paragon Level:  </p>
          <p class="lead">Guild:</p>
        </Container>
      </Jumbotron>
    </div>
  );
};