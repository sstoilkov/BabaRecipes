import React from "react"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"

import { AuthContext } from "../../contexts/AuthContext"
import * as authService from "../../services/authService"

export const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogin } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            userLogin({})
            navigate('/')
    });
    return null;

}