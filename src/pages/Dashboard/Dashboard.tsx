import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userServices } from '../../services';
import { userStore } from '../../types/user.types';
import { logout } from '../../store/user.reducer';

const Dashboard = () => {

    let navigate = useNavigate();

    const [users, setUsers] = useState([]);
    
    const userState = useSelector((state: {user: userStore}) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {        
        try {
            const response = await userServices.getAll();
            setUsers(response.data);
        } catch (error: any) {
            if (error.hasRefreshedToken)
                getUsers();
            else {
                dispatch(logout());
                navigate('/');
            }
        }
    }
        
    return (
        <>
            <h1>Welcome {userState.user?.email} !</h1>
            {users.map((user: {email: string}, key) => {
                return (
                    <p key={key}>{user.email}</p>
                )
            })}
        </>
    )
}

export default Dashboard;