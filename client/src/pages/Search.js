import React from "react";
import {
    Jumbotron, Container, Card, CardTitle, CardDeck,
    CardSubtitle, CardBody, ListGroup, ListGroupItem
} from 'reactstrap';
import Navigation from '../components/Navigation';

import { useState } from "react";
import { getCharacter, getProfile } from "../utils/API";
import { useEffect } from "react";

const Search = () => {
    const [hero, setHero] = useState({})
    const handleSearch = async () => {

        try {
            const response = await (await getProfile("Laserrpg999#1705")).json();
            const results = await (await getCharacter("Laserrpg999#1705", `126040221`)).json();
            console.log(response)
            console.log(results);
            setHero(response)

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        handleSearch()
    }, [])
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Hello, {hero.battleTag} </h1>
                    <p class="lead">Paragon Level: {hero.paragonLevel}  </p>
                    <p class="lead">Guild: {hero.guildName} </p>
                </Container>
                <Navigation />
            </Jumbotron>
            <h1 class="text-center"> Heroes </h1>
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5"></CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                        <ListGroup>
                            <ListGroupItem tag="a" href="/character">Hero name: {hero.heroes ? hero.heroes[0].name : ''}</ListGroupItem>
                            <ListGroupItem>Class: {hero.heroes ? hero.heroes[0].class : ''}</ListGroupItem>
                            <ListGroupItem>Level: {hero.heroes ? hero.heroes[0].level : ''}</ListGroupItem>
                            <ListGroupItem>Paragon Level: {hero.heroes ? hero.heroes[0].paragonLevel : ''}</ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5"></CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                        <ListGroup>
                            <ListGroupItem>Hero name: {hero.heroes ? hero.heroes[1].name : ''}</ListGroupItem>
                            <ListGroupItem>Class: {hero.heroes ? hero.heroes[1].class : ''}</ListGroupItem>
                            <ListGroupItem>Level: {hero.heroes ? hero.heroes[1].level : ''}</ListGroupItem>
                            <ListGroupItem>Paragon Level: {hero.heroes ? hero.heroes[1].paragonLevel : ''}</ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5"></CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                        <ListGroup>
                            <ListGroupItem>Hero name: {hero.heroes ? hero.heroes[2].name : ''}</ListGroupItem>
                            <ListGroupItem>Class: {hero.heroes ? hero.heroes[2].class : ''}</ListGroupItem>
                            <ListGroupItem>Level: {hero.heroes ? hero.heroes[2].level : ''}</ListGroupItem>
                            <ListGroupItem>Paragon Level: {hero.heroes ? hero.heroes[2].paragonLevel : ''}</ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5"></CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                        <ListGroup>
                            <ListGroupItem>Hero name: {hero.heroes ? hero.heroes[3].name : ''}</ListGroupItem>
                            <ListGroupItem>Class: {hero.heroes ? hero.heroes[3].class : ''}</ListGroupItem>
                            <ListGroupItem>Level: {hero.heroes ? hero.heroes[3].level : ''}</ListGroupItem>
                            <ListGroupItem>Paragon Level: {hero.heroes ? hero.heroes[3].paragonLevel : ''}</ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5"></CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                        <ListGroup>
                            <ListGroupItem>Hero name: {hero.heroes ? hero.heroes[4].name : ''}</ListGroupItem>
                            <ListGroupItem>Class: {hero.heroes ? hero.heroes[4].class : ''}</ListGroupItem>
                            <ListGroupItem>Level: {hero.heroes ? hero.heroes[4].level : ''}</ListGroupItem>
                            <ListGroupItem>Paragon Level: {hero.heroes ? hero.heroes[4].paragonLevel : ''}</ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5"></CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                        <ListGroup>
                            <ListGroupItem>Hero name: {hero.heroes ? hero.heroes[5].name : ''}</ListGroupItem>
                            <ListGroupItem>Class: {hero.heroes ? hero.heroes[5].class : ''}</ListGroupItem>
                            <ListGroupItem>Level: {hero.heroes ? hero.heroes[5].level : ''}</ListGroupItem>
                            <ListGroupItem>Paragon Level: {hero.heroes ? hero.heroes[5].paragonLevel : ''}</ListGroupItem>
                        </ListGroup>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    );
};

export default Search
