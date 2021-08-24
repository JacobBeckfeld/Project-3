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

            setLeaderboardData(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getLeaderboards();
        // eslint-disable-next-line
    }, []);

    return (
        <Card className="leaderboard">
            <Table>
                <thead>
                    <tr>
                        <th className="leaderTitle">Leaderboard</th>
                        <th className="leaderTitle">Battletag</th>
                    </tr>
                </thead>

                <tbody>
                    {leaderboardData.map((leaderboard, idx) => (
                        <tr key={idx}>
                            <td className="leaderText">{leaderboardTitles[idx]}</td>
                            <td className="leaderText">{leaderboard.leaderboardBattletag}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
};

export default Leaderboard;