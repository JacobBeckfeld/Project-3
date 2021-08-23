import { React, useState, useEffect } from "react";
import { getProfile, getToken, updateProfile } from "../utils/API";
import { Jumbotron, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import Navigation from "../components/Navigation";
import CharacterCards from "../components/CharacterCards";
import BattletagAndInfo from "../components/BattletagAndInfo";

import Auth from "../utils/auth";

const Dashboard = () => {

    const [profile, setProfile] = useState({});
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', battletag: '' });
    const [showAlert, setShowAlert] = useState(false);

    const User = Auth.getProfile().data;
    const _id = User._id;
    const username = User.username;
    const validBattletag = new RegExp(
        '/(^([A-zÀ-ú][A-zÀ-ú0-9]{2,11})|(^([а-яёА-ЯЁÀ-ú][а-яёА-ЯЁ0-9À-ú]{2,11})))(#[0-9]{4,})$/'
      )

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

    const handleUpdateProfile =  async (_id, username) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        console.log("_id", _id)
        console.log("username", username)
        if (!token) {
            return false;
        }

        try {
            const response = await updateProfile(_id, username)
            const data = response.json()

            if (response.ok) {
                console.log(response)
            } else {
                alert('Failed to update profile');
            }
        } catch (err) {
            console.error(err)
        }
    };
    

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUserFormData({ ...userFormData, [name]: value })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
    
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
          setShowAlert(true)
        }
        if (!validBattletag.test(userFormData.battletag) || (!userFormData.battletag==='')) {
          event.preventDefault()
          event.stopPropagation()
          setShowAlert(true)
        }
    
        try {
          const response = await updateProfile(userFormData);
    
          if (!response.ok) {
            throw new Error('something went wrong!')
          }
    
        } catch (err) {
          console.error(err)
          setShowAlert(true)
        }
    
        setUserFormData({
          username: '',
          email: '',
          password: '',
          battletag: ''
        })
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
                {profile.heroes ?
                    <CharacterCards heroes={profile.heroes} />
                    : <p>It looks like you don't have a battletag entered into your account. Click below to go and add a profile!</p>
                }
            </div>

            <Jumbotron>
            <Form inline onSubmit={handleFormSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="newUsername" className="mr-sm-2">{User.username}</Label>
                    <Input 
                    type="text" 
                    id="newUsername" 
                    placeholder="New username"
                    onChange={handleInputChange}
                
                />
                </FormGroup>
                <Button type="submit" onClick={() => handleUpdateProfile(_id, userFormData), console.log(userFormData)} >Change username</Button>
            </Form>
            </Jumbotron>
        </div>
    );
}

export default Dashboard;
