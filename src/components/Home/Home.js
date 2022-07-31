import React from "react";
import LastestRecipes from "./LastestRecipes/LastestRecipes";

export const Home = ({
    recipes
}) => {

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>Welcome to Baba Recipes. Enjoy cooking!</h2>
            </div>
            <img src="./dephoto231dsa1.png" alt="" />
            <div id="home-page">
                <h1>Latest Recipes</h1>

                {recipes.length > 0
                    ? recipes.map(x => <LastestRecipes key={x._id} recipes={x} />)
                    : <p className="no-articles">No recipes yet</p>
                }
            </div>
        </section>
    );
}
