import React, { useContext, useEffect, useState } from 'react';
import PlayersAPIContext from '../../contexts/PlayersAPIContext';
import PlayersTable from './PlayersTable';

const Players = () => {
    const perPage = 25;
    const { setPlayers, query, setQuery } = useContext(PlayersAPIContext)
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
            <PlayersTable perPage={perPage} />
            <button disabled={query.page === 1} onClick={() => setQuery({ ...query, page: query.page - 1 })}>prev</button>
            <button disabled={hasEnded} onClick={() => setQuery({ ...query, page: query.page + 1 })}>next</button>
        </>
    )
}

export default Players;
