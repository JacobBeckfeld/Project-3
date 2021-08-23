import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Jumbotron, Col, Row
} from 'reactstrap';
import Navigation from '../components/Navigation';

import { useState, useEffect } from "react";
import { getCharacter, getToken } from "../utils/API";

import { getSavedCharacter } from '../utils/localStorage';

//name, class, level, paragonlevel, 

//skills: name, icon, description, rune: name, description

//equipment(items): head: name, icon, neck: name, icon, torso: name, icon, shoulders: name, icon, legs: name, icon, waist: name, icon, hands: name, icon, bracers: name, icon, feet: name, icon, leftFinger: name, icon, rightFinger: name, icon, mainHand: name, icon, offHand: name, icon

//highestSoloRiftCompleted

//stats: life, damage, toughness, healing, attackspeed, armor, strength, dexterity, vitality, intelligence, physicalResist. fireResist, coldResist, lightningResist, poisonResist, arcaneResist, critChance, thorns, lifeSteal, lifePerKill, lifeOnHit




const Character = () => {
    const [hero, setHero] = useState({})
    const character = getSavedCharacter();
    const handleSearch = async () => {
        try {
            const token = await getToken();
            const results = await getCharacter(character.battleTag, character.heroId, token);
            console.log(results);
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
                <p className="lead">Hello, you like Diablo.</p>
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

                        <CardTitle tag="h5">Skill List</CardTitle>
                        <CardSubtitle>{hero.skills ? hero.skills.active[0].skill.name : ''}:</CardSubtitle>
                        <CardImg className="characterImg" top width="" src={hero.skills ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[0].skill.icon}.png` : ""} alt="Card image cap" />
                        <CardText>{hero.skills ? hero.skills.active[0].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[0].rune.name : ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[0].rune.description : ""}</CardText>

                        <CardSubtitle>{hero.skills ? hero.skills.active[1].skill.name : ""}:</CardSubtitle>
                        <CardImg className="characterImg" top width="100%" src={hero.skills ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[1].skill.icon}.png` : ""} alt="Card image cap" />
                        <CardText>{hero.skills ? hero.skills.active[1].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[1].rune.name : ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[1].rune.description : ""}</CardText>

                        <CardSubtitle>{hero.skills ? hero.skills.active[2].skill.name : ""}:</CardSubtitle>
                        <CardImg className="characterImg" top width="100%" src={hero.skills ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[2].skill.icon}.png` : ""} />
                        <CardText>{hero.skills ? hero.skills.active[2].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[2].rune.name : ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[2].rune.description : ""}</CardText>

                        <CardSubtitle>{hero.skills ? hero.skills.active[3].skill.name : ""}:</CardSubtitle>
                        <CardImg className="characterImg" top width="100%" src={hero.skills ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[3].skill.icon}.png` : ""} alt="Card image cap" />
                        <CardText>{hero.skills ? hero.skills.active[3].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[3].rune.name : ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[3].rune.description : ""}</CardText>

                        <CardSubtitle>{hero.skills ? hero.skills.active[4].skill.name : ""}:</CardSubtitle>
                        <CardImg className="characterImg" top width="100%" src={hero.skills ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[4].skill.icon}.png` : ""} alt="Card image cap" />
                        <CardText>{hero.skills ? hero.skills.active[4].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[4].rune.name : ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[4].rune.description : ""}</CardText>

                        <CardSubtitle>{hero.skills ? hero.skills.active[5].skill.name : ""}:</CardSubtitle>
                        <CardImg className="characterImg" top width="100%" src={hero.skills ? `http://media.blizzard.com/d3/icons/skills/64/${hero.skills.active[5].skill.icon}.png` : ""} alt="Card image cap" />
                        <CardText>{hero.skills ? hero.skills.active[5].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[5].rune.name : ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[5].rune.description : ""}</CardText>

                    </CardBody>
                </Card>
                <Card>

                    <CardBody className="equipment d-flex justify-content-center">
                        <Row className="justify-content-center">
                            <Col className="justify-content-center">
                                <CardTitle className="eTitle" tag="h1">Equipment</CardTitle>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Head: {hero.items ? hero.items.head.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.head.icon}.png` : ""} alt="Card image cap" />
                                </div>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Neck: {hero.items ? hero.items.neck.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.neck.icon}.png` : ""} alt="Card image cap" />
                                </div>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Torso: {hero.items ? hero.items.torso.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.torso.icon}.png` : ""} alt="Card image cap" />
                                </div>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Shoulders: {hero.items ? hero.items.shoulders.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.shoulders.icon}.png` : ""} alt="Card image cap" />
                                </div>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Legs: {hero.items ? hero.items.legs.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.legs.icon}.png` : ""} alt="Card image cap" />
                                </div>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Waist: {hero.items ? hero.items.waist.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.waist.icon}.png` : ""} alt="Card image cap" />
                                </div>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Hands: {hero.items ? hero.items.hands.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.hands.icon}.png` : ""} alt="Card image cap" />
                                </div>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Bracers: {hero.items ? hero.items.bracers.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.bracers.icon}.png` : ""} alt="Card image cap" />
                                </div>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Feet: {hero.items ? hero.items.feet.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.feet.icon}.png` : ""} alt="Card image cap" />
                                </div>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Left Finger: {hero.items ? hero.items.leftFinger.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.leftFinger.icon}.png` : ""} alt="Card image cap" />
                                </div>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Right Finger: {hero.items ? hero.items.rightFinger.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.rightFinger.icon}.png` : ""} alt="Card image cap" />
                                </div>
                                <div className="cardThing">
                                    <CardTitle className="eSub m-2" tag="h4" >Main Hand: {hero.items ? hero.items.mainHand.name : ""}</CardTitle>
                                    <CardImg className="eImg" top width="100%" src={hero.items ? `http://media.blizzard.com/d3/icons/items/large/${hero.items.mainHand.icon}.png` : ""} alt="Card image cap" />
                                </div>
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
                    <CardBody className="skills">
                        <CardTitle tag="h1">Character Stats:</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Life: {hero.stats ? hero.stats.life : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Damage: {hero.stats ? hero.stats.damage : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Toughness: {hero.stats ? hero.stats.toughness : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Healing: {hero.stats ? hero.stats.healing : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Attack Speed: {hero.stats ? hero.stats.attackSpeed : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Block Chance: {hero.stats ? hero.stats.blockChance : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Armor: {hero.stats ? hero.stats.armor : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Strength: {hero.stats ? hero.stats.strength : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Dexterity: {hero.stats ? hero.stats.dexterity : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Vitality: {hero.stats ? hero.stats.vitality : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Intelligence: {hero.stats ? hero.stats.intelligence : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Physical Resist: {hero.stats ? hero.stats.physicalResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Fire Resist: {hero.stats ? hero.stats.fireResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Cold Resist: {hero.stats ? hero.stats.coldResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Lightning Resist: {hero.stats ? hero.stats.lightningResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Poison Resist: {hero.stats ? hero.stats.poisonResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Arcane Resist: {hero.stats ? hero.stats.arcaneResist : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Crit Chance: {hero.stats ? hero.stats.critChance : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Thorns: {hero.stats ? hero.stats.thorns : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Life Steal: {hero.stats ? hero.stats.lifeSteal : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Life per Kill: {hero.stats ? hero.stats.lifePerKill : ""}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Life on Hit: {hero.stats ? hero.stats.lifeOnHit : ""}</CardSubtitle>
                    </CardBody>
                </Card>
            </CardDeck>

        </div>
    );
};

export default Character

//export const getCharacter = (battletag, heroID) => {

   // let newBattletag = battletag.replace(/#/, "%23");

    //return fetch(`https://us.api.blizzard.com/d3/profile/${newBattletag}/hero/${heroID}?locale=en_US&access_token=US9BodSM03UzyVr9cxr7HLSvLeQGC5i9Cc`)
//}