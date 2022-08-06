import React from "react";
import { useLocalStorate } from "../hooks/useLocalStorage";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const [auth, setAuth] = useLocalStorate('auth', {});

    const userLogin = (authData) => {
        setAuth(authData)
    }


    const userLogout = () => {
        setAuth({});
    }

    return (
        <AuthContext.Provider value={{
            user: auth,
            userLogin,
            userLogout,
            isAuthenticated: !!auth.accessToken
        }}>
            {children}
        </AuthContext.Provider>
    );
}
