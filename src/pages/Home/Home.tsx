import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userServices } from '../../services';
import { login } from '../../store/user.reducer';
import LoginForm from './LoginForm';

const Home = () => {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handleClick = async () => {
        try {
            const response = await userServices.signIn({ email, password });
            const user = response.data;

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
                setEmail={setEmail} 
                setPassword={setPassword} 
                handleClick={handleClick} 
            />
        </>
    )
}

export default Home;