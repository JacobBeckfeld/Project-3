import React from "react";
import { Card, CardTitle, CardDeck, 
  CardSubtitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

export default function allChars () {
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