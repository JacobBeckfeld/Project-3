import { React, useState, useEffect } from "react";
import { getProfile, getToken } from "../utils/API";
import { Jumbotron, Container } from 'reactstrap';
import Navigation from "../components/Navigation";
import CharacterCards from "../components/CharacterCards";
import Auth from "../utils/auth";

const Dashboard = () => {

    const [profile, setProfile] = useState({});

    const User = Auth.getProfile().data;

    const onPageLoad = async () => {
        if (User.battletag) {
            try {
                const token = await getToken();
                const response = await getProfile(User.battletag, token);
                setProfile(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        onPageLoad();
    }, []);

    console.log(User);
    console.log(profile)

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">User Dashboard</h1>
                <p className="lead">Stay awhile and listen, {User.username}</p>
                <Navigation />
            </Jumbotron>

            <Container fluid>
                <h1 className="display-3">Your battletag, {profile.battleTag} </h1>
                <p className="lead">Paragon Level: {profile.paragonLevel}  </p>
                <p className="lead">Hardcore Paragon Level: {profile.paragonLevelHardcore}  </p>
                <p className="lead">Season Paragon Level: {profile.paragonLevelSeason}  </p>
                <p className="lead">Hardcore Season Paragon Level: {profile.paragonLevelSeasonHardcore}  </p>
                <p className="lead">Guild: {profile.guildName} </p>
            </Container>
            <div className="row justify-content-center">
                {profile.heroes ?
                    <CharacterCards heroes={profile.heroes} />
                    : <p>It looks like you don't have a battletag entered into your account. Click below to go and add a profile!</p>
                }
            </div>
            <Jumbotron>

            </Jumbotron>
        </div>
    );
}

export default Dashboard;
