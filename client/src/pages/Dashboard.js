import { React, useState, useEffect } from "react";
import { getProfile, getToken, updateUserUsername, updateUserEmail } from "../utils/API";
import { Jumbotron, Button, Form, FormGroup, Label, Input, Row, Card } from 'reactstrap';

import Navigation from "../components/Navigation";
import CharacterCards from "../components/CharacterCards";
import BattletagAndInfo from "../components/BattletagAndInfo";
import Leaderboard from "../components/Leaderboard";

import Auth from "../utils/auth";

const Dashboard = () => {

    const [profile, setProfile] = useState({});
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', battletag: '' });

    const User = Auth.getProfile().data;
    const _id = User._id;

    const getUserProfile = async () => {
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

    const handleUpdateUserUsername =  async (_id, username) => {
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

    const handleUpdateUserEmail =  async (_id, email) => {
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

    useEffect(() => {
        getUserProfile();
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
                        : <p>It looks like you don't have a battletag entered into your account. Click below to go and add a profile!</p>
                    }
                </div>
            {/* Add in user profile stuff here! :) */}
            <Leaderboard />
            <Row className="justify-content-end">
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
                        <Button type="submit" onClick={() => handleUpdateUserUsername(_id, userFormData.username)} >Change Username</Button>
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
                        <Button type="submit" onClick={() => handleUpdateUserEmail(_id, userFormData.email)} >Change Email</Button>
                    </Form>
                </Card>
            </Row>

        </div>
    );
}

export default Dashboard;
