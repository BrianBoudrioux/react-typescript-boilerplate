import React from 'react';
import { Button, TextField } from '@material-ui/core';
import ErrorAlert from '../../components/ErrorAlert';
import useStyles from '../../theme/forms.css';



const LoginForm = (props: any) => {

    const classes = useStyles();
    
    return (
        <div>
            <ErrorAlert error={props.error} setError={props.setError} message='Identifiants incorrect' />
            <div>
                <div className={`wrapper ${classes.loginForm}`}>
                    <TextField
                        className="input"
                        label="Username"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setUsername(e.target.value)}
                    />
                    <br />
                    <TextField
                        className="input"
                        label="Password"
                        onChange={(e) => props.setPassword(e.target.value)}
                    />
                    <br />
                    <Button
                        variant="outlined" color="primary"
                        onClick={props.handleClick}>
                        Se connecter
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;