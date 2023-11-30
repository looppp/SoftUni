import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameList from "./components/Game-list/GameList";
import GameCreate from "./components/Game-create/GameCreate";

function App() {
  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/create" element={<GameCreate />} />
      </Routes>
    </div>
  );
}

export default App;
