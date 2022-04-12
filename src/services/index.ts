import { signIn, getAll, isAuth, logout } from "./user.service";

export const userServices = { 
    signIn, 
    getAll,
    isAuth,
    logout
};