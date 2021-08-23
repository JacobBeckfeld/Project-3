import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import { useAppContext } from "../utils/AppContext";

const CharacterCards = (props) => {
    console.log(props);
    const appCtx = useAppContext();

    const renderCharacter = (e) => {
        e.preventDefault();
        const charBattletag = e.target.id;
        console.log(charBattletag);
        const charId = e.target.key;
        console.log(charId)
        appCtx.setAppState({ ...appCtx.appState, battleTag: charBattletag, heroId: charId });
        <Link to="/character"></Link>
    }

    const heroArray = props.heroes;
    console.log(heroArray);
    const battletag = props.battletag;
    console.log(battletag)

    return (
        heroArray.map((hero) => (
            <Card className="col-3 character-card" key={hero.id} id={battletag} onClick={renderCharacter}>
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