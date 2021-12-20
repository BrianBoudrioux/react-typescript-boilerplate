import React, { ReactPropTypes } from 'react';
import { useSelector } from "react-redux";
import { userState } from '../../store/reducers/user.reducer';

const Dashboard = () => {

    const userState = useSelector((state: {user: userState}) => state.user);

    console.log(userState);
        
    return (
        <>
            <h1>Welcome !</h1>
        </>
    )
}

export default Dashboard;