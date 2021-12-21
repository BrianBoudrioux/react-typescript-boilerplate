import { userStore } from "../../types/user.types";

type action = {
    type: string,
    payload: object | string | boolean
}

const initialState = {
    user: null,
    isLogged: false
};

export default function (state: userStore = initialState, action: action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                isLogged: true
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isLogged: false
            };
        default:
            return state;
    }
}