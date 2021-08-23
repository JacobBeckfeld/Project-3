import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import { saveCharacterInfo } from "../utils/localStorage";

const CharacterCards = (props) => {
    console.log(props);

    const renderCharacter = (e) => {
        e.preventDefault();
        console.log(e);
        const charBattletag = e.target.id;
        console.log(charBattletag);
        const charId = e.target.getAttribute("id2");
        console.log(charId)
        saveCharacterInfo({ battleTag: charBattletag, heroId: charId });
        window.location.replace("/character")
    }

    return (
        props.heroes.map((hero) => (
            <Card className="col-3 character-card characterCard" key={hero.id} id={props.battletag} id2={hero.id} onClick={renderCharacter}>
                <CardBody id={props.battletag} id2={hero.id}>
                    <CardTitle className="heroCardTitle" tag="h2" id={props.battletag} id2={hero.id}>Character Name: {hero.name}</CardTitle>
                    <CardSubtitle tag="h4" className="mb-2 heroSub" id={props.battletag} id2={hero.id}>Character Class: {hero.class}</CardSubtitle>
                    <CardText className="heroText" id={props.battletag} id2={hero.id}>Level:{hero.level}</CardText>
                </CardBody>
            </Card>
        ))
    );
}

export default CharacterCards;