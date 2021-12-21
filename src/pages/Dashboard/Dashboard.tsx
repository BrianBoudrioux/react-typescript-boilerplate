import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userStore } from '../../types/user.types';
import {userServices} from '../../services';
import { AppStore } from '../../store';

const Dashboard = () => {

    let navigate = useNavigate();

    const store: any = useContext(AppStore);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {        
        try {
            const response = await userServices.getAll();
            setUsers(response.data.users);
        } catch (error: any) {
            if (error.hasRefreshedToken)
                getUsers();
            else {
                store.user.dispatch({
                    type: "LOGOUT",
                    payload: false
                }, store.user);
                navigate('/');
            }
        }
    }
        
    return (
        <>
            <h1>Welcome {store.user?.email} !</h1>
            {users.map((user: {email: string}, key) => {
                return (
                    <p key={key}>{user.email}</p>
                )
            })}
        </>
    )
}

export default Dashboard;