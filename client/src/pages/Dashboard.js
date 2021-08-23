import { React, useState, useEffect } from "react";
import { getProfile, getToken } from "../utils/API";
import { Jumbotron } from 'reactstrap';

import Navigation from "../components/Navigation";
import CharacterCards from "../components/CharacterCards";
import BattletagAndInfo from "../components/BattletagAndInfo";
import Leaderboard from "../components/Leaderboard";

import Auth from "../utils/auth";

const Dashboard = () => {
    const [profile, setProfile] = useState({});

    const User = Auth.getProfile().data;

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

    useEffect(() => {
        getUserProfile();
        // eslint-disable-next-line
    }, []);

    console.log("User", User);
    console.log("profile", profile)

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
                    <CharacterCards heroes={profile.heroes} battletag={User.battletag} />
                    : <p>It looks like you don't have a battletag entered into your account. Click below to go and add a profile!</p>
                }
            </div>

            {/* Add in user profile stuff here! :) */}
            <Leaderboard />
        </div>
    );
}

export default Dashboard;
