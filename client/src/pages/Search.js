import { useState, useEffect } from "react";
import { Jumbotron, Container } from 'reactstrap';

import Navigation from '../components/Navigation';
import CharacterSearch from "../components/CharacterSearch";
import CharacterCards from "../components/CharacterCards";

import { getProfile, getToken } from "../utils/API";
import { useAppContext } from "../utils/AppContext";

const Search = () => {
    const appCtx = useAppContext();

    const [hero, setHero] = useState({});

    const handleSearch = async () => {
        if (appCtx.appState.battleTag) {
            try {
                const token = await getToken();
                const response = await getProfile(appCtx.appState.battleTag, token);
                console.log(response);

                setHero(response);

            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        handleSearch()
        // eslint-disable-next-line
    }, []);


    
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">Hello, {hero.battleTag} </h1>
                    <p className="lead">Paragon Level: {hero.paragonLevel}  </p>
                    <p className="lead">Guild: {hero.guildName} </p>
                </Container>
                <Navigation />
            </Jumbotron>
            <CharacterSearch />
            <h1 className="text-center"> Heroes </h1>
            <div className="row justify-content-center">
                {appCtx.appState.heroes ? <CharacterCards heroes={appCtx.appState.heroes} /> : ""}
            </div>
        </div>
    );
};

export default Search
