
import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row
} from 'reactstrap';
import stlye from "../style/homePage.css"

const HomePage = () => {
    return (
        <div>
            <Row className="justify-content-center">
                <Card className="homepageCard col-4">
                    <CardBody>
                        <CardTitle className="homeTitle text-center">Welcom Hero!</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted text-center">Welcome to the Diablo Character searh Engine!</CardSubtitle>
                        <CardText></CardText>
                    </CardBody>
                </Card>
            </Row>
        </div>
    );
};



export default HomePage;