import { useEffect, useState } from "react";
import { Card, Table } from "reactstrap";
import { getToken, getLeaderboardData } from "../utils/API";

const Leaderboard = () => {
    const leaderboardTitles = ["Solo Barbarian Rift", "Solo Demon Hunter Rift", "Solo Witch Doctor Rift", "Solo Crusader Rift", "Solo Necromancer Rift", "Solo Wizard Rift", "Solo Monk Rift"];
    const [leaderboardData, setLeaderboardData] = useState([]);

    const getLeaderboards = async () => {
        try {
            const token = await getToken();
            const response = await getLeaderboardData(token);
            console.log("data", response);
            setLeaderboardData(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLeaderboards();
        // eslint-disable-next-line
    }, []);

    console.log(leaderboardData);
    return (
        <Card>
            <Table>
                <thead>
                    <tr>
                        <th>Leaderboard</th>
                        <th>Battletag</th>
                        <th>Hero Name</th>
                    </tr>
                </thead>

                <tbody>
                    {leaderboardData.map((leaderboard, idx) => (
                        <tr>
                            <td>{leaderboardTitles[idx]}</td>
                            <td>{leaderboard.leaderboardBattletag}</td>
                            <td>{leaderboard.leaderboardHero}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
};

export default Leaderboard;