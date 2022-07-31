import React from "react";

import * as recipeService from "../../services/recipeService"

export const AddRecipe = (
    { addRecipeHandler }
) => {
    const onSubmit = (e) => {
        e.preventDefault();

        const recipeData = Object.fromEntries(new FormData(e.target));


        recipeService.create(recipeData)
            .then(result => {
                addRecipeHandler(result);
            })

        // addGameHandler(gameData)
    };

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>New Recipe</h1>
                    <label htmlFor="leg-title">Recipe name:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter recipe name..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter category of the dish..."
                    />
                    <label htmlFor="cookingTime">Cooking time:</label>
                    <input
                        type="number"
                        id="cookingTime"
                        name="cookingTime"
                        min={1}
                        placeholder={1}
                    />

                    <label htmlFor="imageUrl">Image:</label>

                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />

                    <label htmlFor="ingredients">Ingredients:</label>

                    <textarea name="ingredients" id="ingredients" defaultValue={""} />

                    <label htmlFor="direction">Direction:</label>

                    <textarea name="direction" id="direction" defaultValue={""} />

                    <input
                        className="btn submit"
                        type="submit"
                        value="Create Recipe"
                    />
                </div>
            </form>
        </section>
    );
};
