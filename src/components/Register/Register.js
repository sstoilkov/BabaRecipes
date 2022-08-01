import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService"
import { AuthContext } from "../../contexts/AuthContext";
import styles from "./Register.module.css"

export const Register = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/')
            })

    }
    return (
        <section id="register-page" className={styles.registerPage}>
            <form id="register" onSubmit={onSubmit}>
                <div className={styles.container}>
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Example@example.com"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" id="register-password" />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                    <input className={styles.btnSubmit} type="submit" defaultValue="Register" />
                    <p className="field">
                    </p>
                </div>
            </form>
        </section>
    );
};
