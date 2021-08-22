import React from "react";
import {
    Jumbotron, Container, Card, CardTitle, CardDeck,
    CardSubtitle, CardBody, ListGroup, ListGroupItem
} from 'reactstrap';
import Navigation from '../components/Navigation';

import { useState } from "react";
import { getCharacter, getProfile } from "../utils/API";
import { useEffect } from "react";
import CharacterSearch from "../components/CharacterSearch";
import CharacterCards from "../components/CharacterCards";

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
            <CharacterSearch/>
            <h1 class="text-center"> Heroes </h1>
            <CharacterCards heroes= {}/>
        </div>
    );
};

export default Search
