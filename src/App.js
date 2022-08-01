import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login"
import { Logout } from "./components/Logout/Logout"
import { Register } from "./components/Register/Register"
import { Recipe } from "./components/Recipe/Recipe";
import { AddRecipe } from "./components/AddRecipe/AddRecipe";

import * as recipeService from "./services/recipeService"
import { useLocalStorate } from "./hooks/useLocalStorage";
import { AuthContext } from "./contexts/AuthContext"
import { RecipeContext } from "./contexts/RecipeContext"


function App() {

  const [recipes, setRecipes] = useState([]);
  const [auth, setAuth] = useLocalStorate('auth', {});

  const navigate = useNavigate();
  const userLogin = (authData) => {
    setAuth(authData)
  }

  const userLogout = () => {
    setAuth({});
  }

  const recipeAdd = () => {

    navigate('/recipes');
  };

  useEffect(() => {
    recipeService.getAll()
      .then(result => {
        setRecipes(result);
      });
  }, [recipeAdd]);


  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
      <div className="App">
        <Header />
        <RecipeContext.Provider value={{ recipes, recipeAdd }}>
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/recipes" element={<Recipe />} />
              <Route path="/new-recipe" element={<AddRecipe />} />

            </Routes>
          </main>
        </RecipeContext.Provider>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
