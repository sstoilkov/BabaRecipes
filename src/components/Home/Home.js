import React from "react";
import { useContext } from "react";

import { RecipeContext } from "../../contexts/RecipeContext";
import { LastestRecipes } from "./LastestRecipes/LastestRecipes";
import styles from "./Home.module.css"

export const Home = () => {

    const { recipes } = useContext(RecipeContext)
    return (
        <section id="welcome-world" className={styles.welcomePage}>
            <div className={styles.welcomeMessage}>
                <h2>Welcome to Baba Recipes. Enjoy cooking!</h2>
            </div>
            <div id="home-page" className={styles.homePage}>
                <h1>Latest Recipes</h1>

                {recipes.length > 0
                    ? recipes.slice(Math.max(-4, -recipes.length)).map(x => <LastestRecipes key={x._id} recipes={x} />)

                    : <p className={styles.noArticles}>No recipes yet</p>
                }

            </div>
        </section>
    );
}