import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {userServices} from '../../services';
import LoginForm from './LoginForm';

const Home = () => {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleClick = async () => {
        try {
            const response = await userServices.signIn({ email, password });
            const user = response.data;

            localStorage.setItem('access-token', user.access_token);

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
                setEmail={setEmail} 
                setPassword={setPassword} 
                handleClick={handleClick} 
            />
        </>
    )
}

export default Home;