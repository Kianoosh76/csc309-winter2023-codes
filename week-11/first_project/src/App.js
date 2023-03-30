import logo from './logo.svg';
import './App.css';
import Converter from './components/Converter';
import Calculator from './components/Calculator';
import Players from './components/Players';
import PlayersAPIContext, { usePlayersAPIContext } from './contexts/PlayersAPIContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  const players = (
    <PlayersAPIContext.Provider value={usePlayersAPIContext()}>
      <Players />
    </PlayersAPIContext.Provider>
  )

  const home = (
    <h1>Welcome to our app!</h1>
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={home} />
          <Route path="players" element={players} />
          <Route path="converter" element={<Converter />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
export const var1 = 2;