import { useEffect } from "react";
import { Jumbotron } from 'reactstrap';

import Navigation from '../components/Navigation';
import CharacterSearch from "../components/CharacterSearch";
import CharacterCards from "../components/CharacterCards";

import { getProfile, getToken } from "../utils/API";
import { useAppContext } from "../utils/AppContext";

const Search = () => {
    const appCtx = useAppContext();

    const handleSearch = async () => {
        console.log(appCtx.appState.battleTag)
        if (appCtx.appState.battleTag) {
            try {
                const token = await getToken();
                const response = await getProfile(appCtx.appState.battleTag, token);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line
    }, []);


    return (
        <div>
            <Jumbotron fluid>
                <h1 className="display-3">Character Search</h1>
                <Navigation />
            </Jumbotron>
            <CharacterSearch />
            <h1 className="text-center"> Hero results for Battle Tag: {appCtx.appState.battleTag}</h1>
            <div className="row justify-content-center">
                {appCtx.appState.heroes && appCtx.appState.battleTag ? <CharacterCards heroes={appCtx.appState.heroes} battletag={appCtx.appState.battleTag} /> : ""}
            </div>
        </div>
    );
};

export default Search;
