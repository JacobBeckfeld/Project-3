import React from 'react';
import { Jumbotron, Button, Row, Col, Card, CardHeader, CardBody, CardTitle, CardText } from "reactstrap";
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
                <Card className="deckard">
                    <CardHeader className="splash-header" tag="h2">Stay Awhile and Listen!</CardHeader>
                    <CardBody className="splash-card">
                        <CardTitle className="deckardTitle" tag="h1">Welcome to Diablo Source.</CardTitle>
                        <CardText className="deckardText" tag="h5">
                            This hand-crafted, Blizzard-imbued resource comes on the heels of Blizzcon 2021 and is intended to bring to fans a resource of fellow players and their heroes. We hope that you enjoy the experience as it is borne of hardwork, long hours, toil... And blood.
                        </CardText>
                    </CardBody>
                    <Row>
                        <Col className="btn">
                            <Button color="primary" size="lg">
                                <iframe title="stay-awhile-and-listen-button" width="110" height="200" src="https://www.myinstants.com/instant/stay-a-while-and-listen/embed/" frameBorder="0" scrolling="no"></iframe>
                            </Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        </>
    )
}

export default Homepage;