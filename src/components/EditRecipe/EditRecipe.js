import React, { useState } from "react"
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"

import * as recipeService from "../../services/recipeService"
import { RecipeContext } from "../../contexts/RecipeContext"

export const EditRecipe = () => {
    const [currentRecipe, setCurrentRecipe] = useState({});
    const { } = useContext(RecipeContext);
    const { recipeId } = useParams()

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(recipeData => {
                setCurrentRecipe(recipeData)
            })
    }, [])

    return (

        <section id="edit-page" className="auth">
            <form id="edit">
                <div className="container">
                    <h1>Edit Recipe</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentRecipe.title} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={currentRecipe.category} />
                    <label htmlFor="levels">Cooking Time:</label>
                    <input
                        type="number"
                        id="maxTime"
                        name="maxTime"
                        min={1}
                        defaultValue={currentRecipe.cookingTime}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentRecipe.imageUrl} />
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea name="ingredients" id="ingredients" defaultValue={currentRecipe.ingredients} />
                    <label htmlFor="direction">Direction:</label>
                    <textarea name="direction" id="direction" defaultValue={currentRecipe.direction} />

                    <input className="btn submit" type="submit" defaultValue="Edit Game" />
                </div>
            </form>
        </section>
    )

}