import React from "react";
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

const BattletagAndInfo = (props) => {
    const profile = props.profile;

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