import React from "react";
import { Link } from "react-router-dom";

import styles from './RecipeItem.module.css'

export const RecipeItem = ({
    recipes
}) => {

    return (
        <div className={styles.allRecipes}>
            <div className={styles.allRecipesInfo}>

                <h2 className={styles.welcomeMessage}>{recipes.title}</h2>
                <h6>Category: {recipes.category}</h6>
                {recipes.imageUrl
                    ? <img src={recipes.imageUrl} alt="" />
                    : <img src={"https://www.maiz.in/wp-content/uploads/2020/10/generic-food-icon.png"} alt="" />}
                <Link to={`/recipes/${recipes._id}`} className={styles.detailsButton}>
                    Details
                </Link>
            </div>
        </div >

    );
};