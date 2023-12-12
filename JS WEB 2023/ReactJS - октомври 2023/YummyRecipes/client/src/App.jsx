import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AllRecipes from "./components/AllRecipes/AllRecipes";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<AllRecipes />} />
        </Routes>
      </>
    </AuthProvider>
  );
}

export default App;
