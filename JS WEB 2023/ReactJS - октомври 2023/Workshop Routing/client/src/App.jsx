import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameList from "./components/Game-list/GameList";
import GameCreate from "./components/Game-create/GameCreate";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import Logout from "./components/Logout/Logout";
import GameEdit from "./components/Game-edit/GameEdit";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div id="box">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/games/create" element={<GameCreate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path={Path.GameEdit} element={<GameEdit />} />
            <Route path="/games/:gameId" element={<Details />} />
            <Route path={Path.Logout} element={<Logout />} />
          </Routes>
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
