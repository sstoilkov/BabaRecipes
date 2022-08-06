import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"

import { AuthContext } from "../../contexts/AuthContext"
import * as authService from "../../services/authService"

export const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout()
                navigate('/')
            })
            .catch(() => {
                navigate('/')
            })
    });
    return null;

}