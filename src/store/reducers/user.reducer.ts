import { user } from "../actions/user.action";

export type userState = {
    user: user | null,
    isLogged: boolean
}

type action = {
    type: string,
    payload: object | string | boolean
}

const initialState = {
    user: null,
    isLogged: false
};

export default function (state: userState = initialState, action: action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                isLogged: true
            };
        default:
            return state;
    }
}