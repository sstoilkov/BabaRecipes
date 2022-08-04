import React from 'react'
import { useContext } from 'react'
import { Link } from "react-router-dom"

import { AuthContext } from '../../contexts/AuthContext'

import styles from './Header.module.css'

export const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <header>
            <h1>
                <Link to="/">
                    Baba Recipes
                </Link>
            </h1>

            <nav>

                <div className={styles.currentUser}>
                    {user.email && <span>Logged as: {user.email}</span>}
                </div>

                <Link to="/recipes">
                    All recipes
                </Link>
                {user.email
                    ? <div id="user">
                        <Link to="/new-recipe">
                            New Recipe
                        </Link>
                        <Link to="/logout">
                            Logout
                        </Link>
                    </div>

                    : <div id="guest">
                        <Link to="/login">
                            Login
                        </Link>
                        <Link to="/register">
                            Register
                        </Link>
                        <Link to="/contacts">
                            Contacts
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                    </div>
                }
            </nav >
        </header >
    );
}