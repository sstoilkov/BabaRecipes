import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login"
import { Register } from "./components/Register/Register"
import { Recipe } from "./components/Recipe/Recipe";


function App() {

  const [recipes, setRecipes] = useState([]);
  

  return (
    <div className="App">
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<Recipe />} />
          <Route path="/new-recipe" element={<Recipe />} />

        </Routes>

      </main>
    </div>
  );
}

export default App;
