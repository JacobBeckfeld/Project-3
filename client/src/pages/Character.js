import React from "react"
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

import { getProfile } from "../utils/API";


//name, class, level, paragonlevel, 

//skills: name, icon, description, rune: name, description

//equipment(items): head: name, icon, neck: name, icon, torso: name, icon, shoulders: name, icon, legs: name, icon, waist: name, icon, hands: name, icon, bracers: name, icon, feet: name, icon, leftFinger: name, icon, rightFinger: name, icon, mainHand: name, icon, offHand: name, icon

//highestSoloRiftCompleted

//stats: life, damage, toughness, healing, attackspeed, armor, strength, dexterity, vitality, intelligence, physicalResist. fireResist, coldResist, lightningResist, poisonResist, arcaneResist, critChance, thorns, lifeSteal, lifePerKill, lifeOnHit

const handleSearch = async () => {
    try {
        const results = await (await getProfile("Laserrpg999#1705")).json();
        console.log(results);
    } catch (error) {
        console.log(error);
    }
}


const Character = (props) => {
    handleSearch();
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Character Name: </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Character Class</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Highest Solo Rift</CardSubtitle>
                    <CardText>Level:</CardText>
                    <CardText>Paragon Level</CardText>
                </CardBody>
            </Card>
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Skill List</CardTitle>
                        <CardSubtitle>Skill Name:</CardSubtitle>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardText>Skill Description</CardText>
                        <CardSubtitle>Rune</CardSubtitle>
                        <CardText>Rune Description</CardText>
                    </CardBody>
                </Card>
                <Card>

                    <CardBody>
                        <CardTitle tag="h5">Equipment</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Head</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Neck</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Torso:</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Shoulders:</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Legs:</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Waist:</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Hands:</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Bracers:</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Feet:</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Left Finger:</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Right Finger:</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Main Hand:</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Off Hand:</CardSubtitle>
                        <CardText>Name</CardText>
                        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
                    </CardBody>
                </Card>


                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Character Stats:</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Life: <span>Life</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Damage: <span>Damage</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Toughness: <span>Toughness</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Healing: <span>Healing</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Attack Speed: <span>Attack Speed</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Armor: <span>Armor</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Strength: <span>Strength</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Dexterity: <span>Dexterity</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Vitality: <span>Vitality</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Intelligence: <span>Intelligence</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Physical Resist: <span>Physical Resist</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Fire Resist: <span>Fire Resist</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Cold Resist: <span>Cold Resist</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Lightning Resist: <span>Lightning Resist</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Poison Resist: <span>Poison Resist</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Arcane Resist: <span>Arcane Resist</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Crit Chance: <span>Crit Chance</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Thorns: <span>Thorns</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Life Steal: <span>Life Steal</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Life per Kill: <span>Life per Kill</span></CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Life on Hit: <span>Life on Hit</span></CardSubtitle>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Character