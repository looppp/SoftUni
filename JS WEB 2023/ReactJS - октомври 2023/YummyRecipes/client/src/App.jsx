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
import EditRecipe from "./components/Edit-recipe/EditRecipe";
import AuthGuard from "./components/guards/AuthGuard";
import UserPage from "./components/UserPage/UserPage";
import Footer from "./components/Footer/Footer";

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
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />

          <Route element={<AuthGuard />}>
            <Route path="/logout" element={<Logout />} />
            <Route path="/recipes/create" element={<CreateRecipe />} />
            <Route path="/recipes/:recipeId/edit" element={<EditRecipe />} />
            <Route path="/profile" element={<UserPage />} />
          </Route>
        </Routes>

        <Footer />
      </>
    </AuthProvider>
  );
}

export default App;
