import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login"
import { Logout } from "./components/Logout/Logout"
import { Register } from "./components/Register/Register"
import { Recipe } from "./components/Recipe/Recipe";
import { AddRecipe } from "./components/AddRecipe/AddRecipe";
import { EditRecipe } from "./components/EditRecipe/EditRecipe";

import { useLocalStorate } from "./hooks/useLocalStorage";
import { AuthContext } from "./contexts/AuthContext"
import { RecipeProvider } from "./contexts/RecipeContext"
import { RecipeDetails } from "./components/RecipeDetails/RecipeDetails";
import "./App.module.css"
import { About } from "./components/About/About";
import { Contacts } from "./components/Contacts/Contacts";


function App() {


  const [auth, setAuth] = useLocalStorate('auth', {});

  const userLogin = (authData) => {
    setAuth(authData)
  }


  const userLogout = () => {
    setAuth({});
  }

  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
      <div className="App">
        <Header />
        <RecipeProvider>
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/recipes" element={<Recipe />} />
              <Route path="/new-recipe" element={<AddRecipe />} />
              <Route path="/recipes/:recipeId/edit" element={<EditRecipe />} />
              <Route path="/recipes/:recipeId/" element={<RecipeDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
        </RecipeProvider>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
