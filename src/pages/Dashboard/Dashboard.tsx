import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {userServices} from '../../services';

const Dashboard = () => {

    let navigate = useNavigate();

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
                navigate('/');
            }
        }
    }
        
    return (
        <>
            <h1>Welcome !</h1>
            {users.map((user: {email: string}, key) => {
                return (
                    <p key={key}>{user.email}</p>
                )
            })}
        </>
    )
}

export default Dashboard;