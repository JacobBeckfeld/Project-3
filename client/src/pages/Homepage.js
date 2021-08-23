import React from 'react';
import { Jumbotron, Button, Row, Col } from "reactstrap";
import Navigation from '../components/Navigation';


function Homepage() {
    return (
        <>
            <Jumbotron className="jumbotron">
                <h1 className="display-3">Diablo Source</h1>
                <p className="lead">Hello, you like Diablo.</p>
                <Navigation />
            </Jumbotron>
            <div className="text-center splash">
                <h2>Stay Awhile and Listen!</h2>
                <h4>Welcome to Diablo Source.</h4>
                <h5>This hand-crafted, Blizzard-imbued resource comes on the heels of Blizzcon 2021 and is intended to bring to fans a resource of fellow players their heroes. We hope that you enjoy the experience as it is borne of hardwork, long hours, toil... And blood.</h5>
            </div>
            <Row>
                <Col className="btn">
                    <Button color="primary" size="lg">
                        <iframe title="stay-awhile-and-listen-button" width="110" height="200" src="https://www.myinstants.com/instant/stay-a-while-and-listen/embed/" frameBorder="0" scrolling="no"></iframe>
                    </Button>
                </Col>
            </Row>
        </>
    )
}



export default Homepage;