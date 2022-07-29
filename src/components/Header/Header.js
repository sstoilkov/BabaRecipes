import React from 'react'
import { Link } from "react-router-dom"

import './Header.module.css'

export const Header = () => {

    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    Baba Recipes
                </Link>
            </h1>
            <nav>
                <Link to="/recipes">
                    All recipes
                </Link>
                <div id="user">
                    <Link to="/new-recipe">
                       New Recipe
                    </Link>
                    <Link to="/logout">
                        Logout
                    </Link>
                </div>

                <div id="guest">
                    <Link to="/login">
                        Login
                    </Link>
                    <Link to="/register">
                        Register
                    </Link>
                </div>
            </nav >
        </header >
    );
}