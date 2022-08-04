import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./LastestRecipes.module.css"

export const LastestRecipes = (props) => {
    return (
        <div className={styles.recipe}>
            <div>
                {props.recipes.imageUrl
                    ? <img className={styles.imageWrap} src={props.recipes.imageUrl} />
                    : <img className={styles.imageWrap} src={"https://www.maiz.in/wp-content/uploads/2020/10/generic-food-icon.png"} />}
            </div>
            <h3>{props.recipes.title}</h3>
            <h4>{props.recipes.category} - category</h4>
            <div className={styles.dataButtons}>
                <Link to={`/recipes/${props.recipes._id}`} className={styles.detailsBtn}>
                    Details
                </Link>
            </div>
        </div>
    );
};
