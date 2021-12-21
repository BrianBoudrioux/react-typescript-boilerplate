import { userStore } from "../../types/user.types";

const initialState = {
    user: null,
    isLogged: false
};

export default (state: userStore = initialState, action: {type: string, payload: object | string | boolean}) => {
    const {type, payload} = action;

    switch (type) {
        case "LOGIN":
            return {
                ...state,
                user: payload,
                isLogged: true
            }
        case "LOGOUT":
            return {
                ...state,
                user: null,
                isLogged: false
            }
        default:
            return state;
            break;
    }
};