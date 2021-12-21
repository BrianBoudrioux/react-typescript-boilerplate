import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { userStore } from './types/user.types';
import { useContext } from 'react';
import { AppStore } from './store';



const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dashboard' element={<PrivateRoute component={<Dashboard />} />} />
        </Routes>
    )
}

const PrivateRoute = ({ component: Component }: { component: JSX.Element }) => {
    const store: any = useContext(AppStore);
    return !store.user.isLogged ? <Navigate to="/" /> : Component;
}


export default AppRouter;