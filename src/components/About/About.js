import React from "react";

import styles from "./About.module.css"

export const About = () => {
    return (
        <section id="aboutPage" className={styles.aboutPage}>
            <div className={styles.aboutPage}>
                <h1>This is a cooking application for people who love cooking. </h1>
                <h2>Please login to get the best cooking experience!</h2>
            </div>
        </section>
    );
}