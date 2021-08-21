import React from 'react';
import { Jumbotron, Button } from "reactstrap";
import Navigation from '../components/Navigation';


import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row
} from 'reactstrap';
import stlye from "../style/homePage.css"

function Homepage() {
    return (
        <>
            <Jumbotron>
                <h1 className="display-3">Diablo Source</h1>
                <p className="lead">Hello, you like Diablo.</p>
                <Navigation />
            </Jumbotron>
            <Button color="primary" size="lg" block>
                <iframe width="110" height="200" src="https://www.myinstants.com/instant/stay-a-while-and-listen/embed/" frameborder="0" scrolling="no"></iframe>
            </Button>
        </>
    )
}



export default HomePage;