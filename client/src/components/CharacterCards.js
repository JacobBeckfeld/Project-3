import { React } from "react";

import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';

const CharacterCards = (props) => {
    const heroArray = props.heroes;

    return (
        heroArray.map((hero) => (
            <Card className="col-3 character-card">
                <CardBody>
                    <CardTitle tag="h5">Character Name: {hero.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Character Class: {hero.class}</CardSubtitle>
                    <CardText>Level:{hero.level}</CardText>
                </CardBody>
            </Card>
        ))
    );
}

export default CharacterCards;