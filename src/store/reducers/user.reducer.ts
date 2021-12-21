type action = {
    type: string,
    payload: object | string | boolean
}

export default function (state: any, action: action) {
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