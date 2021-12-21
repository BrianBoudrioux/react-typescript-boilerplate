import { createContext, useReducer } from "react";
import userReducer from "./reducers/user.reducer";

export const AppStore = createContext({});

export const StoreProvider = ({children} : {children: JSX.Element}) => {

    const [user, userDispatch] = useReducer(userReducer, {user: null, isLogged: false});

    const value = {
        user: {...user, dispatch: userDispatch},
    }

    return (
        <AppStore.Provider value={value}>
            {children}
        </AppStore.Provider>
    )
}