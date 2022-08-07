import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as recipeService from "../../services/recipeService"
import { RecipeContext } from "../../contexts/RecipeContext"
import { AuthContext } from "../../contexts/AuthContext"
import { Comment } from './Comment.js/Comment';
import * as commentService from "../../services/commentService"

import styles from "./RecipeDetails.module.css"

export const RecipeDetails = () => {

    const [currentRecipe, setCurrentRecipe] = useState({});
    const [comments, setComments] = useState([])
    const { recipeId } = useParams();

    const { recipesUpdate } = useContext(RecipeContext);
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(recipeData => {
                setCurrentRecipe(recipeData)
            })
    }, [])

    useEffect(() => {
        commentService.getRecipeById(recipeId)
            .then(commentList => {
                setComments(commentList)
            })
    }, [])


    const recipeDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this recipe?');

        if (confirmation) {
            recipeService.remove(recipeId)
            recipesUpdate();
            navigate('/');
        }
    }

    const addCommentHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const comment = formData.get('comment');
        e.target.reset();
        commentService.create(recipeId, comment)
        commentService.getRecipeById(recipeId)
            .then(commentList => {
                setComments(commentList)
            });

    }


    return (

        <section id="detailPage" className={styles.detailPage}>
            <ul>
                <li>
                    <h1 className={styles.title}>{currentRecipe.title}</h1>
                    <div>
                        {currentRecipe._ownerId === user._id ?
                            < button className={styles.btn}
                                onClick={() => navigate(`/recipes/${recipeId}/edit`)}>
                                Edit
                            </button>
                            : <div></div>
                        }
                        {currentRecipe._ownerId === user._id ?
                            <button className={styles.btn} onClick={recipeDeleteHandler}>
                                Delete
                            </button>
                            : <div></div>
                        }
                    </div>
                </li>
                <li>
                    <div className={styles.category}>
                        <p>Category: {currentRecipe.category}</p>
                    </div>
                </li>

                {currentRecipe.imageUrl
                    ? <img className={styles.img}
                        src={currentRecipe.imageUrl}
                        alt=""
                        width="300" height="300"
                    />
                    : <img className={styles.img}
                        src={"https://www.maiz.in/wp-content/uploads/2020/10/generic-food-icon.png"}
                        alt=""
                        width="300" height="300"
                    />
                }
                <li>
                    <div className={styles.cookingTime}>
                        <p >Cooking time: {currentRecipe.cookingTime} min</p>
                    </div>

                </li>
                <li>
                    <div className={styles.ingredients}>
                        <h3>Ingredients: </h3>
                        <p >{currentRecipe.ingredients}</p>
                    </div>
                </li>
                <li>
                    <div className={styles.direction}>
                        <h3>Direction: </h3>
                        <p >{currentRecipe.direction}</p>
                    </div>
                </li>
                <li>
                    <Comment comments={comments} />
                </li>
                <li>
                    <article className={styles.createCom}>
                        <label>Add new comment:</label>
                        <form className={styles.form} onSubmit={addCommentHandler}>
                            <textarea
                                className={styles.createCom}
                                name="comment"
                                placeholder="Comment......"
                            />

                            <input
                                className={styles.btnSubmit}
                                type="submit"
                                value="Add Comment"
                            />
                        </form>
                    </article>
                </li>
            </ul>
        </section >
    );
};
