import React from "react";

export const Home = () => {
    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>ALL new recipes are</h2>
                <h3>in Baba Recipes</h3>
            </div>
            {/* <img src="./images/four_slider_img01.png" alt="" /> */}
            <div id="home-page">
                <h1>Latest Recipes</h1>
                <p className="no-articles">No recipes yet</p>
            </div>
        </section>
    );
}
