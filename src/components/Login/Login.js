import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext";
import * as AuthService from "../../services/authService";
import styles from "./Login.module.css"


export const Login = () => {
    const { userLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password
        } = Object.fromEntries(new FormData(e.target))

        AuthService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/')
            })
            .catch(() => {
                //add page for failed login
                navigate('/')
            });
    }

    const onClick = () => {
        navigate('/register')
    }

    return (
        <section id="login-page" className={styles.loginPage}>
            <form id="login" onSubmit={onSubmit}>
                <div className={styles.container}>
                    <div className={styles.brandLogo} />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Example@example.com"
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-pass" name="password" />
                    <input type="submit" className={styles.btnSubmit} value="Login" />
                    <p className={styles.noProfile}>
                        <span onClick={onClick}>
                            If you don't have profile click here
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}

