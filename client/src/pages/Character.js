import React from "react"
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

import { useState } from "react";
import { getCharacter, getProfile, getToken } from "../utils/API";
import { useEffect } from "react";

//name, class, level, paragonlevel, 

//skills: name, icon, description, rune: name, description

//equipment(items): head: name, icon, neck: name, icon, torso: name, icon, shoulders: name, icon, legs: name, icon, waist: name, icon, hands: name, icon, bracers: name, icon, feet: name, icon, leftFinger: name, icon, rightFinger: name, icon, mainHand: name, icon, offHand: name, icon

//highestSoloRiftCompleted

//stats: life, damage, toughness, healing, attackspeed, armor, strength, dexterity, vitality, intelligence, physicalResist. fireResist, coldResist, lightningResist, poisonResist, arcaneResist, critChance, thorns, lifeSteal, lifePerKill, lifeOnHit

//Try using global state process, try using usecontext or redux
//use activities 1-12 for useContext


const Character = () => {
    
    const [ hero, setHero ] = useState({})
    const handleSearch = async () => {
        
        try {
            const token = await getToken();
            const response = await (await getProfile("Laserrpg999#1705", token)).json();
            const results = await (await getCharacter("Laserrpg999#1705", `126040221`, token)).json();
            console.log(response)
            console.log(results);
            setHero(results)
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handleSearch()
    }, [])
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Character Name:{hero.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Character Class: {hero.class}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Highest Solo Rift: {hero.highestSoloRiftCompleted}</CardSubtitle>
                    <CardText>Level:{hero.level}</CardText>
                    <CardText>Paragon Level{hero.paragonLevel}</CardText>
                </CardBody>
            </Card>
            <CardDeck>
                <Card>
                    <CardBody>
                        
                        <CardTitle tag="h5">Skill List</CardTitle>
                        <CardSubtitle>{hero.skills ? hero.skills.active[0].skill.name : ''}:</CardSubtitle>
                        <CardImg top width="100%" src={hero.skills ? `http://media.blizzard.com/d3/icons/${hero.skills.active[0].skill.icon}/small/<icon>.png` : ""} alt="Card image cap" />
                        <CardText>{hero.skills ? hero.skills.active[0].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[0].rune.name : ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[0].rune.description : ""}</CardText>
                        
                        <CardSubtitle>{hero.skills ? hero.skills.active[1].skill.name : ""}:</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardText>{hero.skills ? hero.skills.active[1].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[1].rune.name : ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[1].rune.description : ""}</CardText>
                        
                        <CardSubtitle>{hero.skills ? hero.skills.active[2].skill.name : ""}:</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardText>{hero.skills ? hero.skills.active[2].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[2].rune.name : ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[2].rune.description : ""}</CardText>
                        
                        <CardSubtitle>{hero.skills ? hero.skills.active[3].skill.name : ""}:</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardText>{hero.skills ? hero.skills.active[3].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[3].rune.name : ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[3].rune.description : ""}</CardText>
                        
                        <CardSubtitle>{hero.skills ? hero.skills.active[4].skill.name : ""}:</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardText>{hero.skills ? hero.skills.active[4].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[4].rune.name: ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[4].rune.description : ""}</CardText>
                        
                        <CardSubtitle>{hero.skills ? hero.skills.active[5].skill.name : ""}:</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardText>{hero.skills ? hero.skills.active[5].skill.description : ""}</CardText>
                        <CardSubtitle>Rune: {hero.skills ? hero.skills.active[5].rune.name : ""}</CardSubtitle>
                        <CardText>{hero.skills ? hero.skills.active[5].rune.description : ""}</CardText> 

                    </CardBody>
                </Card>
                <Card>

                    <CardBody>
                        <CardTitle tag="h5">Equipment</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Head: {hero.items ? hero.items.head.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Neck: {hero.items ? hero.items.neck.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Torso: {hero.items ? hero.items.torso.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Shoulders: {hero.items ? hero.items.shoulders.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Legs: {hero.items ? hero.items.legs.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Waist: {hero.items ? hero.items.waist.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Hands: {hero.items ? hero.items.hands.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Bracers: {hero.items ? hero.items.bracers.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Feet: {hero.items ? hero.items.feet.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Left Finger: {hero.items ? hero.items.leftFinger.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Right Finger: {hero.items ? hero.items.rightFinger.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Main Hand: {hero.items ? hero.items.mainHand.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Off Hand: {hero.items ? hero.items.offHand.name : ""}</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        
                    </CardBody>
                </Card>


                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Character Stats:</CardTitle>
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