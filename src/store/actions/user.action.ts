export type user = {
    username: string,
    password: string,
    accessToken: string
}

export const login = (user: user) => ({
    type: "LOGIN",
    payload: user
});