import { React, useState, useEffect } from "react";
import { getProfile, getToken } from "../utils/API";
import { Jumbotron, Card, ListGroup, ListGroupItem } from 'reactstrap';

const Dashboard = (props) => {
    const [profile, setProfile] = useState({})
    const onPageLoad = async () => {
        if (props.battletag) {
            try {
                const token = await getToken();
                const response = await (await getProfile(props.battletag, token)).json();
                console.log(response);
                setProfile(response);
            } catch (error) {
                console.log(error);
            }
        }


    }

    useEffect(() => {
        onPageLoad()
    }, [])

    return (
        <div>
            <Jumbotron>
                <h1>Hello **CURRENT_USERNAME_HERE**</h1>
                {props.battletag ?
                    profile.heroes.map((hero) => {
                        <Card>
                            <ListGroup>
                                <ListGroupItem tag="a" href="/character">Hero name: {hero.name ? hero.name : ''}</ListGroupItem>
                                <ListGroupItem>Class: {hero.heroes ? hero.heroes[0].class : ''}</ListGroupItem>
                                <ListGroupItem>Level: {hero.heroes ? hero.heroes[0].level : ''}</ListGroupItem>
                                <ListGroupItem>Paragon Level: {hero.heroes ? hero.heroes[0].paragonLevel : ''}</ListGroupItem>
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
