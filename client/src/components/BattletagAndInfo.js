import React from "react";
import { withRouter } from 'react-router-dom';
import { Container, Button } from 'reactstrap';
import { saveProfile } from "../utils/API";
import  Auth  from '../utils/auth'

const BattletagAndInfo = (props) => {
    const profile = props.profile;
    const _id = Auth.getProfile().data._id
    const battletag = profile.battleTag;
    
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
            if (response.ok) {
                console.log(response)
            } else {
                alert('Failed to save profile');
            }
        } catch (err) {
            console.error(err)
        }
    };
    
    return (
        <Container fluid>
            <h1 className="display-3">Battletag: {profile.battleTag} </h1>
            <p className="lead">Paragon Level: {profile.paragonLevel}  </p>
            <p className="lead">Hardcore Paragon Level: {profile.paragonLevelHardcore}  </p>
            <p className="lead">Season Paragon Level: {profile.paragonLevelSeason}  </p>
            <p className="lead">Hardcore Season Paragon Level: {profile.paragonLevelSeasonHardcore}  </p>
            <p className="lead">Guild: {profile.guildName} </p>
            <Button onClick={() => handleSaveProfile(_id, battletag)} className="save-btag">Save Battletag</Button>
        </Container>
    );
}

export default withRouter(BattletagAndInfo);