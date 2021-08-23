import { Link } from "react-router-dom"
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import { useAppContext } from "../utils/AppContext";

const CharacterCards = (props) => {
    console.log(props);
    const appCtx = useAppContext();

    const renderCharacter = (e) => {
        e.preventDefault();
        console.log(e);
        const charBattletag = e.target.id;
        console.log(charBattletag);
        const charId = e.target.getAttribute("id2");
        console.log(charId)
        appCtx.setAppState({ ...appCtx.appState, battleTag: charBattletag, heroId: charId });
        console.log(appCtx.appState);
        //<Link to="/character"></Link>
    }

    return (
        props.heroes.map((hero) => (
            <Card className="col-3 character-card" key={hero.id} id={props.battletag} id2={hero.id} onClick={renderCharacter}>
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