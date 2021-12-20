import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/actions/user.action';
import { signIn } from '../../services';
import LoginForm from './LoginForm';

const Home = () => {

    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleClick = async () => {

        try {
            const user = await signIn({ username, password })
            localStorage.setItem('access-token', user.accessToken);
            dispatch(login(user));
            navigate('/dashboard');
        } catch (error: any) {
            setError(true);
        }
    }

    return (
        <>
            <LoginForm 
                error={error} 
                setError={setError} 
                setUsername={setUsername} 
                setPassword={setPassword} 
                handleClick={handleClick} 
            />
        </>
    )
}

export default Home;