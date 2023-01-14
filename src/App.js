import { Route, Routes } from 'react-router';
import './App.css';
import AnotherHome from './components/AnotherHome';
import GameDetails from './components/GameDetails';
import Header from './components/Header';
import Home from './components/Home';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/search" element={<SearchResult />} />
        <Route path="/page/:pageId" element={<AnotherHome />} />
        <Route path="/game/:gameId" element={<GameDetails />} />
      </Routes>
    </div>
  );
}

export default App;
