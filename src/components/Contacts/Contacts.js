import React from "react";

import styles from "./Contacts.module.css"

export const Contacts = () => {
    return (
        <section id="contactsPage" className={styles.contactsPage}>
            <div className={styles.contactsPage}>
                <ul>
                    <li>
                        <p>You can contact us by email:</p>
                    </li>
                    <li>
                        <p>clients@baba-recipes.com</p>
                    </li>
                    <li>
                        <p> or by phone on:</p>
                    </li>
                    <li>
                        <p>  088 88 888 88 </p>
                    </li>
                </ul>
            </div>
        </section >
    );
}