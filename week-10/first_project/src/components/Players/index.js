import React, { useEffect, useState } from 'react';

const Players = () => {
    const perPage = 25;
    var [players, setPlayers] = useState([])
    var [query, setQuery] = useState({
        search: '', page: 1
    })
    var [hasEnded, setHasEnded] = useState(true);

    useEffect(() => {
        fetch(`https://www.balldontlie.io/api/v1/players?search=${query.search}&page=${query.page}&per_page=${perPage}`)
            .then(response => response.json())
            .then(json => {
                setPlayers(json.data);
                setHasEnded(json.meta.next_page === null)
            })
    }, [query])

    return (
        <>
            <input type="text"
                value={query.search}
                onChange={(e) => {
                    setQuery({ page: 1, search: e.target.value })
                }} />
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
            <button disabled={query.page === 1} onClick={() => setQuery({ ...query, page: query.page - 1 })}>prev</button>
            <button disabled={hasEnded} onClick={() => setQuery({ ...query, page: query.page + 1 })}>next</button>
        </>
    )
}

export default Players;
