import { user } from "../types/user.types";
import http from "./config";

export const signIn = async (user: Omit<user, "access_token" | "id">): Promise<any> => {
    return await http.post('/users/login', user);
}

export const getAll = async () : Promise<any> => {
    return await http.get('/users');
}

export const isAuth = async () : Promise<any> => {
    return await http.get('/users/auth/refresh');
}

export const logout = async () : Promise<any> => {
    return await http.get('/users/logout');
}