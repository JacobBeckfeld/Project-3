import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Jumbotron, Col, Row, Spinner
} from 'reactstrap';
import Navigation from '../components/Navigation';

import { useState, useEffect } from "react";
import { getCharacter, getToken } from "../utils/API";

import { getSavedCharacter } from '../utils/localStorage';

const Character = () => {
    const [hero, setHero] = useState({})
    const character = getSavedCharacter();
    const handleSearch = async () => {
        try {
            const token = await getToken();
            const results = await getCharacter(character.battleTag, character.heroId, token);

            setHero(results)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleSearch()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Character Spread</h1>
                <Navigation />
            </Jumbotron>
            <Card className="infoParent">
                <CardBody className="info">
                    <CardTitle tag="h1">Character Name: {hero.name}</CardTitle>
                    <CardSubtitle tag="h3" className="mb-2">Character Class: {hero.class}</CardSubtitle>
                    <CardSubtitle tag="h3" className="mb-2">Highest Solo Rift: {hero.highestSoloRiftCompleted}</CardSubtitle>
                    <CardText tag="h3">Level: {hero.level}</CardText>
                    <CardText tag="h3">Paragon Level: {hero.paragonLevel}</CardText>
                </CardBody>
            </Card>
            <CardDeck>
                <Card>
                    <CardBody className="skills">

                        <CardTitle className="skillTitle" tag="h1">Skill List</CardTitle>

                        {hero.skills ?
                            (hero.skills.active[0] ?
                                <div>
                                    <CardSubtitle className="theSkills">{hero.skills ? (hero.skills.active[0] ? hero.skills.active[0].skill.name : "") : ""} :</CardSubtitle>
                                    <CardImg className="characterImg" top width="" src={hero.skills ? (hero.skills.active[0] ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[0].skill.icon}.png` : "") : ""} alt="Card image cap" />
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[0] ? hero.skills.active[0].skill.description : "") : ""}</CardText>
                                </div>
                                : <Spinner color="danger" />)
                            : <Spinner color="danger" />}
                        {hero.skills ?
                            (hero.skills.active[0] ?
                                <div>
                                    <CardSubtitle className="theSkills">Rune: {hero.skills ? (hero.skills.active[0].rune ? hero.skills.active[0].rune.name : "No Rune") : ""}</CardSubtitle>
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[0].rune ? hero.skills.active[0].rune.description : "") : ""}</CardText>
                                </div>
                                : "")
                            : ""}

                        {hero.skills ?
                            (hero.skills.active[1] ?
                                <div>
                                    <CardSubtitle className="theSkills">{hero.skills ? (hero.skills.active[1] ? hero.skills.active[1].skill.name : "") : ""} :</CardSubtitle>
                                    <CardImg className="characterImg" top width="" src={hero.skills ? (hero.skills.active[1] ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[1].skill.icon}.png` : "") : ""} alt="Card image cap" />
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[1] ? hero.skills.active[1].skill.description : "") : ""}</CardText>
                                </div>
                                : "")
                            : ""}
                        {hero.skills ?
                            (hero.skills.active[1] ?
                                <div>
                                    <CardSubtitle className="theSkills">Rune: {hero.skills ? (hero.skills.active[1].rune ? hero.skills.active[1].rune.name : "No Rune") : ""}</CardSubtitle>
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[1].rune ? hero.skills.active[1].rune.description : "") : ""}</CardText>
                                </div>
                                : "")
                            : ""}

                        {hero.skills ?
                            (hero.skills.active[2] ?
                                <div>
                                    <CardSubtitle className="theSkills">{hero.skills ? (hero.skills.active[2] ? hero.skills.active[2].skill.name : "") : ""} :</CardSubtitle>
                                    <CardImg className="characterImg" top width="" src={hero.skills ? (hero.skills.active[2] ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[2].skill.icon}.png` : "") : ""} alt="Card image cap" />
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[2] ? hero.skills.active[2].skill.description : "") : ""}</CardText>
                                </div>
                                : "")
                            : ""}
                        {hero.skills ?
                            (hero.skills.active[2] ?
                                <div>
                                    <CardSubtitle className="theSkills">Rune: {hero.skills ? (hero.skills.active[2].rune ? hero.skills.active[2].rune.name : "No Rune") : ""}</CardSubtitle>
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[2].rune ? hero.skills.active[2].rune.description : "") : ""}</CardText>
                                </div>
                                : "")
                            : ""}

                        {hero.skills ?
                            (hero.skills.active[3] ?
                                <div>
                                    <CardSubtitle className="theSkills">{hero.skills ? (hero.skills.active[3] ? hero.skills.active[3].skill.name : "") : ""} :</CardSubtitle>
                                    <CardImg className="characterImg" top width="" src={hero.skills ? (hero.skills.active[3] ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[3].skill.icon}.png` : "") : ""} alt="Card image cap" />
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[3] ? hero.skills.active[3].skill.description : "") : ""}</CardText>
                                </div>
                                : "")
                            : ""}
                        {hero.skills ?
                            (hero.skills.active[3] ?
                                <div>
                                    <CardSubtitle className="theSkills">Rune: {hero.skills ? (hero.skills.active[3].rune ? hero.skills.active[3].rune.name : "No Rune") : ""}</CardSubtitle>
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[3].rune ? hero.skills.active[3].rune.description : "") : ""}</CardText>
                                </div>
                                : "")
                            : ""}

                        {hero.skills ?
                            (hero.skills.active[4] ?
                                <div>
                                    <CardSubtitle className="theSkills">{hero.skills ? (hero.skills.active[4] ? hero.skills.active[4].skill.name : "") : ""} :</CardSubtitle>
                                    <CardImg className="characterImg" top width="" src={hero.skills ? (hero.skills.active[4] ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[4].skill.icon}.png` : "") : ""} alt="Card image cap" />
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[4] ? hero.skills.active[4].skill.description : "") : ""}</CardText>
                                </div>
                                : "")
                            : ""}
                        {hero.skills ?
                            (hero.skills.active[4] ?
                                <div>
                                    <CardSubtitle className="theSkills">Rune: {hero.skills ? (hero.skills.active[4].rune ? hero.skills.active[4].rune.name : "No Rune") : ""}</CardSubtitle>
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[4].rune ? hero.skills.active[4].rune.description : "") : ""}</CardText>
                                </div>
                                : "")
                            : ""}

                        {hero.skills ?
                            (hero.skills.active[5] ?
                                <div>
                                    <CardSubtitle className="theSkills">{hero.skills ? (hero.skills.active[5] ? hero.skills.active[5].skill.name : "") : ""} :</CardSubtitle>
                                    <CardImg className="characterImg" top width="" src={hero.skills ? (hero.skills.active[5] ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[5].skill.icon}.png` : "") : ""} alt="Card image cap" />
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[5] ? hero.skills.active[5].skill.description : "") : ""}</CardText>
                                </div>
                                : "")
                            : ""}
                        {hero.skills ?
                            (hero.skills.active[5] ?
                                <div>
                                    <CardSubtitle className="theSkills">Rune: {hero.skills ? (hero.skills.active[5].rune ? hero.skills.active[5].rune.name : "No Rune") : ""}</CardSubtitle>
                                    <CardText className="skillText">{hero.skills ? (hero.skills.active[5].rune ? hero.skills.active[5].rune.description : "") : ""}</CardText>
                                </div>
                                : "")
                            : ""}

                    </CardBody>
                </Card>
                <Card>

                    <CardBody className="equipment d-flex justify-content-center">
                        <Row className="justify-content-center">
                            <Col className="justify-content-center">
                                <CardTitle className="eTitle" tag="h1">Equipment</CardTitle>

                                {hero.items ?
                                    (hero.items.head ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Head: {hero.items ? (hero.items.head ? hero.items.head.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.head ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.head.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : <Spinner color="danger" />)
                                    : <Spinner color="danger" />}

                                {hero.items ?
                                    (hero.items.neck ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Neck: {hero.items ? (hero.items.neck ? hero.items.neck.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.neck ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.neck.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                                {hero.items ?
                                    (hero.items.torso ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Torso: {hero.items ? (hero.items.torso ? hero.items.torso.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.torso ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.torso.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                                {hero.items ?
                                    (hero.items.shoulders ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Shoulders: {hero.items ? (hero.items.shoulders ? hero.items.shoulders.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.shoulders ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.shoulders.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                                {hero.items ?
                                    (hero.items.legs ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Legs: {hero.items ? (hero.items.legs ? hero.items.legs.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.legs ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.legs.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                                {hero.items ?
                                    (hero.items.waist ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Waist: {hero.items ? (hero.items.waist ? hero.items.waist.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.waist ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.waist.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                                {hero.items ?
                                    (hero.items.hands ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Hands: {hero.items ? (hero.items.hands ? hero.items.hands.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.hands ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.hands.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                                {hero.items ?
                                    (hero.items.bracers ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Bracers: {hero.items ? (hero.items.bracers ? hero.items.bracers.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.bracers ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.bracers.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                                {hero.items ?
                                    (hero.items.feet ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Feet: {hero.items ? (hero.items.feet ? hero.items.feet.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.feet ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.feet.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                                {hero.items ?
                                    (hero.items.leftFinger ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Left Finger: {hero.items ? (hero.items.leftFinger ? hero.items.leftFinger.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.leftFinger ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.leftFinger.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                                {hero.items ?
                                    (hero.items.rightFinger ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Right Finger: {hero.items ? (hero.items.rightFinger ? hero.items.rightFinger.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.rightFinger ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.rightFinger.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                                {hero.items ?
                                    (hero.items.mainHand ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Main Hand: {hero.items ? (hero.items.mainHand ? hero.items.mainHand.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.mainHand ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.mainHand.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                                {hero.items ?
                                    (hero.items.offHand ?
                                        <div className="cardThing">
                                            <CardTitle className="eSub m-2" tag="h4" >Off Hand: {hero.items ? (hero.items.offHand ? hero.items.offHand.name : "") : ""}</CardTitle>
                                            <CardImg className="eImg" top width="100%" src={hero.items ? (hero.items.offHand ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.offHand.icon}.png` : "") : ""} alt="Card image cap" />
                                        </div>
                                        : "")
                                    : ""}

                            </Col>
                        </Row>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody className="skills stats">
                        <CardTitle className="skillTitle" tag="h1">Character Stats:</CardTitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Life: {hero.stats ? hero.stats.life : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Damage: {hero.stats ? hero.stats.damage : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Toughness: {hero.stats ? hero.stats.toughness : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Healing: {hero.stats ? hero.stats.healing : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Attack Speed: {hero.stats ? hero.stats.attackSpeed : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Block Chance: {hero.stats ? hero.stats.blockChance : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Armor: {hero.stats ? hero.stats.armor : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Strength: {hero.stats ? hero.stats.strength : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Dexterity: {hero.stats ? hero.stats.dexterity : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Vitality: {hero.stats ? hero.stats.vitality : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Intelligence: {hero.stats ? hero.stats.intelligence : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Physical Resist: {hero.stats ? hero.stats.physicalResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Fire Resist: {hero.stats ? hero.stats.fireResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Cold Resist: {hero.stats ? hero.stats.coldResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Lightning Resist: {hero.stats ? hero.stats.lightningResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Poison Resist: {hero.stats ? hero.stats.poisonResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Arcane Resist: {hero.stats ? hero.stats.arcaneResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Crit Chance: {hero.stats ? hero.stats.critChance : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Thorns: {hero.stats ? hero.stats.thorns : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Life Steal: {hero.stats ? hero.stats.lifeSteal : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Life per Kill: {hero.stats ? hero.stats.lifePerKill : ""}</CardSubtitle>
                        <CardSubtitle tag="h3" className="skillsInfo mb-2">Life on Hit: {hero.stats ? hero.stats.lifeOnHit : ""}</CardSubtitle>
                    </CardBody>
                </Card>
            </CardDeck>

        </div>
    );
};

export default Character;