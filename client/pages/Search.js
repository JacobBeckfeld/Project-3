import React from "react";
import { Jumbotron, Container, Card, CardTitle, CardDeck, CardSubtitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

const mainProfile = (props) => {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Hello, {battleTag}</h1>
            <p class="lead">Paragon Level:</p>
            <p class="lead">Guild:</p>
          </Container>
        </Jumbotron>
      </div>
    );
  };

const allChars = (props) => {
    return (
        <CardDeck>
        <Card>
            <CardBody>
            <CardTitle tag="h5">{charName}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{charClass}</CardSubtitle>
            <ListGroup>
                <ListGroupItem>Level: </ListGroupItem>
                <ListGroupItem>Paragon Level:</ListGroupItem>
                <ListGroupItem>Hardcore?:</ListGroupItem>
                <ListGroupItem>Season?:</ListGroupItem>
            </ListGroup>
            </CardBody>
        </Card>
        </CardDeck>
    );
};

export default mainProfile;
export default allChars;


    // return (
    // <div class="container">
    // <div class="jumbotron jumbotron-fluid">
    //     <h1 class="display-4">Hello, {battleTag} </h1>
    //     <p class="lead">Paragon Level:</p>
    //     <p class="lead">Guild:</p>
    // </div>
    // <div class="card" style="width: 18rem;">
    //     <div class="card-body">
    //         <h5 class="card-title">Name</h5>
    //         <ul class="list-group list-group-flush">
    //             <li class="list-group-item">Class: </li>
    //             <li class="list-group-item">Level: </li>
    //             <li class="list-group-item">Paragon Level: </li>
    //             <li class="list-group-item"> Season (y/n) </li>
    //         </ul>
    //     </div>
    // </div>
    // </div>
    // )

// Main profile: Name, paragon lvl, guild
// All characters - name , class, lvl, paragon lvl