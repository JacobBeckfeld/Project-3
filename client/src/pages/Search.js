import React from "react";
import { Jumbotron, Container, Card, CardTitle, CardDeck, 
CardSubtitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

import { getProfile } from "../utils/API";

const handleSearch = async () => {
  try {
      const results = await (await getProfile("Laserrpg999#1705")).json();
      console.log(results)
  } catch (error) {
      console.log(error);
  }
}

const Search = (props) => {
  handleSearch();
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Hello, {props.battleTag} </h1>
          <p class="lead">Paragon Level:  </p>
          <p class="lead">Guild:</p>
        </Container>
      </Jumbotron>
      <CardDeck>
        <Card>
            <CardBody>
            <CardTitle tag="h5"></CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
            <ListGroup>
                <h1 class="text-center"> Heros </h1>
                <ListGroupItem>Level: </ListGroupItem>
                <ListGroupItem>Paragon Level: </ListGroupItem>
                <ListGroupItem>Hardcore?: </ListGroupItem>
                <ListGroupItem>Season?: </ListGroupItem>
            </ListGroup>
            </CardBody>
        </Card>
        </CardDeck>
    </div>
  );
};

// const allChars = () => {
//     return (
//         <CardDeck>
//         <Card>
//             <CardBody>
//             <CardTitle tag="h5"></CardTitle>
//             <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
//             <ListGroup>
//                 <ListGroupItem>Level: </ListGroupItem>
//                 <ListGroupItem>Paragon Level: </ListGroupItem>
//                 <ListGroupItem>Hardcore?: </ListGroupItem>
//                 <ListGroupItem>Season?: </ListGroupItem>
//             </ListGroup>
//             </CardBody>
//         </Card>
//         </CardDeck>
//     );
// };

export default Search
