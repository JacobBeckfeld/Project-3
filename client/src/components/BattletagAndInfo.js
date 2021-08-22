import { React } from "react";
import { Container, Button } from 'reactstrap';
import { saveProfile } from "../utils/API";
import  Auth  from '../utils/auth'

const BattletagAndInfo = (props) => {
    const profile = props.profile;
    
    const handleSaveProfile = async (e) => {
        e.preventDefault();
    
        const battletag = profile.battleTag;
        // const _id = Auth.getProfile().data._id
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log("token", token)
        if (!token) {
            return false;
        }
        
        if (battletag) {
            const response = await saveProfile(battletag, token)
            
            if (response.ok) {
                document.location.replace('/dashboard');
    
            } else {
                alert('Failed to save profile');
            }
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
            <Button onClick={handleSaveProfile} className="save-btag">Save Battletag</Button>
        </Container>
    );
}

export default BattletagAndInfo;