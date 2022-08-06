import React from "react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as recipeService from '../services/recipeService'

export const RecipeContext = createContext();

export const RecipeProvider = ({
    children
}) => {

    const [recipes, setRecipes] = useState([{}]);

    const navigate = useNavigate();

    useEffect(() => {
        recipesUpdate();
    }, []);

    const recipeEdit = () => {
        recipesUpdate()
    }

    const recipeAdd = () => {
        recipesUpdate()
    }

    const recipesUpdate = () => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result);
                navigate('/')
            });
    }

    return (
        <RecipeContext.Provider value={{
            recipes,
            recipeAdd,
            recipeEdit,
            recipesUpdate
        }}>
            {children}
        </RecipeContext.Provider>
    );
}

