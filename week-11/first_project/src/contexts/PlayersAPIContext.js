import { createContext, useState } from "react";

export const usePlayersAPIContext = () => {
    const [players, setPlayers] = useState([]);
    const [query, setQuery] = useState({
        search: '', page: 1
    })

    return {
        players,
        setPlayers,
        query,
        setQuery,
    }
} 

const PlayersAPIContext = createContext({
    players: null,
    setPlayers: () => {},
    query: null,
    setQuery: () => {},
})

export default PlayersAPIContext