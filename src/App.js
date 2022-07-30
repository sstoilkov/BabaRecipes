import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login"
import { Logout } from "./components/Logout/Logout"
import { Register } from "./components/Register/Register"
import { Recipe } from "./components/Recipe/Recipe";

import * as recipeService from "./services/recipeService"
import { AuthContext } from "./contexts/AuthContext"


function App() {

  const [recipes, setRecipes] = useState([]);
  const [auth, setAuth] = useState({});

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
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recipes" element={<Recipe />} />
            <Route path="/new-recipe" element={<Recipe />} />

          </Routes>

        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
