import React, { useState } from "react"
import { useContext, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import * as recipeService from "../../services/recipeService"
import { RecipeContext } from "../../contexts/RecipeContext"
import styles from "./EditRecipe.module.css"

export const EditRecipe = () => {
    const [currentRecipe, setCurrentRecipe] = useState({});
    const { recipeEdit } = useContext(RecipeContext);
    const { recipeId } = useParams()

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(recipeData => {
                setCurrentRecipe(recipeData)
            })
    }, [])

    const navigation = useNavigate()

    const onSubmit = (e) => {
        const recipeData = Object.fromEntries(new FormData(e.target));
        recipeService.edit(recipeData, currentRecipe._id)
            .then(recipeEdit())
           navigation('/recipes')
    }

    const naviHome = () => {
        navigation('/')
    }


    return (

        <section id="editPage" className={styles.editPage}> 
            <form id="edit" onSubmit={onSubmit}>
                <div className={styles.container}>
                    <h1>Edit Recipe</h1>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentRecipe.title} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={currentRecipe.category} />
                    <label htmlFor="levels">Cooking Time:</label>
                    <input
                        type="number"
                        id="cookingTime"
                        name="cookingTime"
                        min={1}
                        defaultValue={currentRecipe.cookingTime}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={currentRecipe.imageUrl} />
                    <label htmlFor="ingredients">Ingredients:</label>
                    <textarea name="ingredients" id="ingredients" defaultValue={currentRecipe.ingredients} />
                    <label htmlFor="direction">Direction:</label>
                    <textarea name="direction" id="direction" defaultValue={currentRecipe.direction} />

                    <input className={styles.btn} type="submit" value="Save Recipe" />
                    <input className={styles.btn} type="button" value="Cancel" onClick={naviHome} />




                </div>
            </form>
        </section>
    )

}