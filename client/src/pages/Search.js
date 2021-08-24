import { useState, useEffect } from "react";
import { Jumbotron, Button, Alert } from 'reactstrap';

import Navigation from '../components/Navigation';
import CharacterSearch from "../components/CharacterSearch";
import CharacterCards from "../components/CharacterCards";

import { getProfile, getToken, saveProfile } from "../utils/API";
import { useAppContext } from "../utils/AppContext";
import Auth from '../utils/auth';

const Search = () => {
    const appCtx = useAppContext();

    const [hero, setHero] = useState({});
    const [showAlert, setShowAlert] = useState(false);

    const _id = Auth.getProfile().data._id
    const onDismiss = () => setShowAlert(false);

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

    const handleSaveProfile = async (_id, battletag) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log("token", token)
        console.log("_id", _id)
        console.log("battletag", battletag)
        if (!token) {
            return false;
        }

        try {
            const response = await saveProfile(_id, battletag)
            const data = response.json()
            console.log(data)

            if (response.ok) {
                console.log(response)
                setShowAlert(true)
            } else {
                alert('Failed to save profile');
            }
        } catch (err) {
            console.error(err)
        }
    };

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
            {appCtx.appState.heroes && appCtx.appState.battleTag ?
                <>
                    <div className="row justify-content-center">
                        <h1 className="text-center"> Hero results for Battle Tag: {appCtx.appState.battleTag}</h1>
                    <Button xs="1" onClick={() => handleSaveProfile(_id, appCtx.appState.battleTag)} className="save-btag">Save Battletag</Button>
                    <Alert className="save-btag-alert" color="info" isOpen={showAlert} toggle={onDismiss}>
                        BattleTag saved!
                    </Alert>
                    </div>
                    <div className="row justify-content-center">
                        <CharacterCards heroes={appCtx.appState.heroes} battletag={appCtx.appState.battleTag} />
                    </div>
                </>
                : ""}
        </div>

    );
};

export default Search;
