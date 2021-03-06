import { React, useState, useEffect } from "react";
import { getProfile, getToken, updateUserUsername, updateUserEmail, getSavedBattletags, deleteUser } from "../utils/API";
import { Jumbotron, Button, Form, FormGroup, Label, Input, Row, Card, CardTitle } from 'reactstrap';

import Navigation from "../components/Navigation";
import CharacterCards from "../components/CharacterCards";
import BattletagAndInfo from "../components/BattletagAndInfo";
import Leaderboard from "../components/Leaderboard";

import Auth from "../utils/auth";

const Dashboard = () => {
    const [profile, setProfile] = useState({});
    const [User, setUser] = useState(Auth.getProfile().data);
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', battletag: '' });
    const [savedBattletagsState, setSavedBattletags] = useState([]);

    const getUserProfile = async () => {
        setUser(Auth.getProfile().data);
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

    const getBattletags = () => {
        getSavedBattletags(User._id)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSavedBattletags(data.savedBattletags);
            })
    }

    const handleUpdateUserUsername = async (_id, username) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
            return false;
        }

        try {
            const response = await updateUserUsername(_id, username)

            if (response.ok) {
                console.log(response)
            } else {
                alert('Failed to update username');
            }
        } catch (err) {
            console.error(err)
        }
    };

    const handleUpdateUserEmail = async (_id, email) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }

        try {
            const response = await updateUserEmail(_id, email)

            if (response.ok) {
                console.log(response)
            } else {
                alert('Failed to update email');
            }
        } catch (err) {
            console.error(err)
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUserFormData({ ...userFormData, [name]: value })
    }

    const handleDeleteUser = async (_id) => {
        try {
            const response = await deleteUser(_id)

            if (response.ok) {
                console.log(response)

                localStorage.removeItem('id_token')
                window.location.replace('/')


            } else {
                alert('Failed to delete user');
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getUserProfile();
        getBattletags();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">User Dashboard</h1>
                <p className="lead">Stay awhile and listen, {User.username}</p>
                <Navigation />
            </Jumbotron>
            <BattletagAndInfo profile={profile} />
            <div className="row justify-content-center">
                <h1 className="heroTitle">Your Heroes!</h1>
                {profile.heroes ?
                    <CharacterCards heroes={profile.heroes} battletag={User.battletag} />
                    : <p>It looks like you don't have a battletag entered into your account.</p>
                }
            </div>

            <div className="battleParent row justify-content-center">
                <h1 className="yourBattle">Your Saved Battletags!</h1>
                {savedBattletagsState ?

                    savedBattletagsState.map((battletag, idx) => (
                        <Card  className="battleTagCard col-2 m-2" key={idx} id={battletag}>
                            <CardTitle className="battleTagThing" tag="h2" id={battletag} >{battletag}</CardTitle>
                        </Card>

                    ))
                    : <p>It looks like you don't have any saved battletags! Go to the search bar to begin saving!</p>
                }
            </div>

            <Leaderboard />
            <Row className="infoParent justify-content-end">
                <Card className="col-4 infoChange">
                    <h1>Change your profile information here!</h1>
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="newUsername" className="mr-sm-2"></Label>
                            <Input
                                type="text"
                                id="newUsername"
                                name="username"
                                placeholder="New username"
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <Button type="submit" onClick={() => handleUpdateUserUsername(User._id, userFormData.username)} >Change Username</Button>
                    </Form>
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="newUsername" className="mr-sm-2"></Label>
                            <Input
                                type="text"
                                id="newEmail"
                                name="email"
                                placeholder="New email"
                                onChange={handleInputChange}
                            />
                        </FormGroup>
                        <Button type="submit" onClick={() => handleUpdateUserEmail(User._id, userFormData.email)} >Change Email</Button>
                    </Form>
                    <Button onClick={() => handleDeleteUser(User._id)} className="btn-sm col-3 delete-user">DELETE MY ACCOUNT</Button>
                </Card>
            </Row>
        </div>
    );
}

export default Dashboard;