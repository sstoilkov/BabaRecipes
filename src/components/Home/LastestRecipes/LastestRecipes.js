import React from 'react';
import { Link } from 'react-router-dom';

const LastestRecipes = (props) => {
    return (
        <div className="recipe">
            <div className="image-wrap">
                {props.recipes.imageUrl
                    ? <img src={props.recipes.imageUrl} />
                    : <img src={"https://www.maiz.in/wp-content/uploads/2020/10/generic-food-icon.png"} />}
            </div>
            <h3>{props.recipes.title}</h3>
            <div className="data-buttons">
                <Link to={`/recipes/${props.recipes._id}`} className="btn details-btn">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default LastestRecipes;
