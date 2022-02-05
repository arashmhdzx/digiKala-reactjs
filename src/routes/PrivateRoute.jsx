import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
    const isLogin = useSelector(state => state.loginStatus.isLog);
    
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
            isLogin ?
                children
                : <Navigate to="/user/login-register" />
        
    );
};

export default PrivateRoute;