import { React, useState, useEffect } from "react";
import { getProfile, getToken } from "../utils/API";
import { Jumbotron, Card, ListGroup, ListGroupItem } from 'reactstrap';
import Navigation from "../components/Navigation";
import Auth from "../utils/auth";

const Dashboard = (props) => {

    const [profile, setProfile] = useState({})

    const User = Auth.getProfile().data;

    console.log(User);

    const onPageLoad = async () => {
        if (User.battletag) {
            try {
                const token = await getToken();
                const response = await (await getProfile(User.battletag, token)).json();
                console.log(response);
                setProfile(response);
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        onPageLoad()
    }, []);

    return (
        <div>
            <Navigation />
            <Jumbotron>
                <h1>Hello **CURRENT_USERNAME_HERE**</h1>
                {User.battletag != "" ?
                    profile.heroes.map((hero) => {
                        <Card>
                            <ListGroup>
                                <ListGroupItem tag="a" href="/character">Hero name: {hero.name ? hero.name : ''}</ListGroupItem>
                                <ListGroupItem>Class: {hero.class ? hero.class : ''}</ListGroupItem>
                                <ListGroupItem>Level: {hero.level ? hero.level : ''}</ListGroupItem>
                                <ListGroupItem>Paragon Level: {hero.paragonLevel ? hero.paragonLevel : ''}</ListGroupItem>
                            </ListGroup>
                        </Card>
                    })
                    : <p>It looks like you don't have a battletag entered into your account. Click below to go and add a profile!</p>
                }
            </Jumbotron>

            <Jumbotron>

            </Jumbotron>
        </div>
    );
}

export default Dashboard;
