import React from "react";
import { useContext } from "react";

import { RecipeContext } from "../../contexts/RecipeContext";
import { RecipeItem } from "./RecipeItem/RecipeItem"
import styles from './Recipe.module.css'

export const Recipe = () => {

    const { recipes } = useContext(RecipeContext)

    return (
        <section id="recipe-page" className={styles.recipe} >
            <h1>All Recipes</h1>

            {recipes.length > 0
                ? recipes.map(x => <RecipeItem key={x._id} recipes={x} />)
                : <h3 className={styles.noArticles}>No recipes yet</h3>
            }

        </section>
    );
};