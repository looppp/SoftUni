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
import AuthGuard from "./components/guards/AuthGuard";

function App() {
  return (
    <AuthProvider>
      <div id="box">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<AuthGuard />}>
            <Route path="/games/create" element={<GameCreate />} />
            <Route path="/games/:gameId" element={<Details />} />
            <Route path={Path.GameEdit} element={<GameEdit />} />
            <Route path={Path.Logout} element={<Logout />} />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
