import React from "react";

import styles from "./Contacts.module.css"

export const Contacts = () => {
    return (
        <section id="contactsPage" className={styles.contactsPage}>
            <ul>
                <li>
                    <p>You can contact us by email: clients@baba-recipes.com</p>
                </li>
                <li>
                    <p> or by phone on: 088 88 888 88</p>
                </li>
            </ul>
        </section >
    );
}