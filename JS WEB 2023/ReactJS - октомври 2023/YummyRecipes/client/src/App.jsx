import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import AllRecipes from "./components/AllRecipes/AllRecipes";
import CreateRecipe from "./components/Create-recipe/CreateRecipe";
import RecipeDetails from "./components/recipeDetails/RecipeDetails";

import { Routes, Route } from "react-router-dom";
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
          <Route path="/logout" element={<Logout />} />
          <Route path="/recipes/create" element={<CreateRecipe />} />
          <Route path="/recipes/:gameId" element={<RecipeDetails />} />
        </Routes>
      </>
    </AuthProvider>
  );
}

export default App;
