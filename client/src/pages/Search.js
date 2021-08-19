import React from "react";
import { Jumbotron, Container, Card, CardTitle, CardDeck, 
  CardSubtitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

const mainProfile = () => {
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

const allChars = () => {
    return (
        <CardDeck>
        <Card>
            <CardBody>
            <CardTitle tag="h5"></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
            <ListGroup>
                <ListGroupItem>Level: </ListGroupItem>
                <ListGroupItem>Paragon Level: </ListGroupItem>
                <ListGroupItem>Hardcore?: </ListGroupItem>
                <ListGroupItem>Season?: </ListGroupItem>
            </ListGroup>
            </CardBody>
        </Card>
        </CardDeck>
    );
};

export default { mainProfile, allChars };