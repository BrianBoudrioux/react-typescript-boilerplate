import { user } from "../../types/user.types";

export const login = (user: user) => {
    localStorage.setItem('access-token', user.access_token);
    return {
        type: "LOGIN",
        payload: user
    }
};

export const logout = () => {
    localStorage.removeItem('access-token');
    return {
        type: "LOGOUT",
        payload: false
    }
};