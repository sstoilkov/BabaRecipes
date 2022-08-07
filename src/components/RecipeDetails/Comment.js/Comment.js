import React from "react"

import styles from "./Comments.module.css"

export const Comment = ({
    comments
}) => {

    return (
        <div className="detailsComments">
            <h2>Lastest Comments:</h2>
            <ul>
                {comments.length > 0 ? comments.slice(-4).reverse().map(x =>
                    <li className={styles.comment} key={`${x._recipeId}_${x._id}`} >
                        <p>{x.user.email}: {x.text}</p>
                    </li>)
                    : < p className="noComment">No comments yet.</p>}
            </ul>
        </div >
    )
}