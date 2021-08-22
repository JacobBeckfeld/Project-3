import React from 'react';
import { Jumbotron, Button } from "reactstrap";
import Navigation from '../components/Navigation';


function Homepage() {
    return (
        <>
            <Jumbotron>
                <h1 className="display-3">Diablo Source</h1>
                <p className="lead">Hello, you like Diablo.</p>
                <Navigation />
            </Jumbotron>
            <Button color="primary" size="lg" block>
                <iframe title="stay-awhile-and-listen-button" width="110" height="200" src="https://www.myinstants.com/instant/stay-a-while-and-listen/embed/" frameBorder="0" scrolling="no"></iframe>
            </Button>
        </>
    )
}



export default Homepage;