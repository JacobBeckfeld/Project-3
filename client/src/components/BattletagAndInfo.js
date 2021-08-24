import { React, useState } from "react";
import { withRouter } from 'react-router-dom';
import { Container, Button, Alert } from 'reactstrap';
import { saveProfile } from "../utils/API";
import Auth from '../utils/auth'

const BattletagAndInfo = (props) => {
    const [showAlert, setShowAlert] = useState(false);
    const profile = props.profile;
    const _id = Auth.getProfile().data._id
    const battletag = profile.battleTag;

    const onDismiss = () => setShowAlert(false);

    const handleSaveProfile = async (_id, battletag) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const response = await saveProfile(_id, battletag)

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

    return (
        <Container fluid>
            <h1 className="display-3">Battletag: {profile.battleTag} </h1>
            <p className="lead">Paragon Level: {profile.paragonLevel}  </p>
            <p className="lead">Hardcore Paragon Level: {profile.paragonLevelHardcore}  </p>
            <p className="lead">Season Paragon Level: {profile.paragonLevelSeason}  </p>
            <p className="lead">Hardcore Season Paragon Level: {profile.paragonLevelSeasonHardcore}  </p>
            <p className="lead">Guild: {profile.guildName} </p>
        </Container>
    );
}

export default withRouter(BattletagAndInfo);