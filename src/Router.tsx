import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { useSelector } from "react-redux";
import { userState } from './store/reducers/user.reducer';



const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/dashboard' element={<PrivateRoute component={<Dashboard />} />} />
        </Routes>
    )
}

const PrivateRoute = ({ component: Component }: { component: JSX.Element }) => {
    const userState = useSelector((state: { user: userState }) => state.user);
    return !userState.isLogged ? <Navigate to="/" /> : Component;
}


export default AppRouter;