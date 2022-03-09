
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children, restricted }) => {
    const isLogin = useSelector(state => state.loginStatus.isLog);

    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route

        isLogin && restricted 
            ?  <Navigate to="/profile" />
            : children

    );
};

export default PublicRoute;