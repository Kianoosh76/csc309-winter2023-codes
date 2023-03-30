import { useContext } from "react";
import PlayersAPIContext from "../../../contexts/PlayersAPIContext";

const PlayersTable = ({ perPage }) => {
    const { players, query } = useContext(PlayersAPIContext);

    return (
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>name</td>
                    <td>team</td>
                    <td>position</td>
                    <td>height</td>
                </tr>
            </thead>
            <tbody>
                {players.map((player, index) => (
                    <tr key={player.id}>
                        <td>{index + (query.page - 1) * perPage + 1}</td>
                        <td>{player.first_name} {player.last_name}</td>
                        <td>{player.team.name}</td>
                        <td>{player.position}</td>
                        <td>{player.height_feet ? `${player.height_feet}" ${player.height_inches}'` : '-'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PlayersTable;