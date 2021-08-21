import { React, useState, useEffect } from "react";
import { getProfile, getToken } from "../utils/API";
import { Jumbotron, Container, Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap';
import Navigation from "../components/Navigation";
import Auth from "../utils/auth";

const Dashboard = (props) => {

    const [profile, setProfile] = useState({});

    const User = Auth.getProfile().data;

    const onPageLoad = async () => {
        if (User.battletag) {
            try {
                const token = await getToken();
                const response = await (await getProfile(User.battletag, token)).json();
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
                <p class="lead">Paragon Level: {profile.paragonLevel}  </p>
                <p class="lead">Hardcore Paragon Level: {profile.paragonLevelHardcore}  </p>
                <p class="lead">Season Paragon Level: {profile.paragonLevelSeason}  </p>
                <p class="lead">Hardcore Season Paragon Level: {profile.paragonLevelSeasonHardcore}  </p>
                <p class="lead">Guild: {profile.guildName} </p>
            </Container>
            <div className="row justify-content-center">
                {profile.heroes ?
                    profile.heroes.map((hero) => (
                        <Card className="col-3 character-card">
                            <CardBody>
                                <CardTitle tag="h5">Character Name:{hero.name}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Character Class: {hero.class}</CardSubtitle>
                                <CardText>Level:{hero.level}</CardText>
                            </CardBody>
                            {/* <ListGroup>
                                <ListGroupItem tag="a" href="/character">Hero name: {hero.name ? hero.name : ''}</ListGroupItem>
                                <ListGroupItem>Class: {hero.class ? hero.class : ''}</ListGroupItem>
                                <ListGroupItem>Level: {hero.level ? hero.level : ''}</ListGroupItem>
                                <ListGroupItem>Paragon Level: {hero.paragonLevel ? hero.paragonLevel : ''}</ListGroupItem>
                            </ListGroup> */}
                        </Card>
                    ))
                    : <p>It looks like you don't have a battletag entered into your account. Click below to go and add a profile!</p>
                }
            </div>
            <Jumbotron>

            </Jumbotron>
        </div>
    );
}

export default Dashboard;
