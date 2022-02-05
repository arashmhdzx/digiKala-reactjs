import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
    } from "react-router-dom";

import MainPage from './components/app.jsx'
import LoginPage from './pages/LoginPage/Login'
import ConfirmPage from './pages/LoginPage/Confirm.jsx'
import NewUserPass from './pages/LoginPage/newUserPass';
import PrivateRoute from './routes/PrivateRoute.jsx';
import PublicRoute from './routes/PublicRoute.jsx';
import Profile from './pages/profile/profile.jsx'


const routes = () => {
    
    return (
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<PublicRoute restricted={false}>
                        <MainPage />
                    </PublicRoute> } />
                    <Route path="/user/login-register" element={ <PublicRoute restricted={true}>
                        <LoginPage />
                    </PublicRoute> } />
                    <Route path="/user/login-register" element={ <PublicRoute restricted={true}>
                        <LoginPage />
                    </PublicRoute> } />
                    <Route path="/user/confirm" element={ <PublicRoute restricted={true}>
                        <ConfirmPage />
                    </PublicRoute> } />
                    <Route path="/user/register/confirm" element={ <PublicRoute restricted={true}>
                        <NewUserPass />
                    </PublicRoute> } />
                    <Route path="/profile" element={ <PrivateRoute>
                        <Profile />
                    </PrivateRoute> } />
                    
                    {/* <PublicRoute restricted={false} component={ <MainPage/>} path="/" exact />
                    <PublicRoute restricted={true} component={<LoginPage />} path="" />
                    <PublicRoute restricted={true} component={<ConfirmPage />} path="/user/confirm" />
                    <PublicRoute restricted={true} component={<NewUserPass />} path="/user/register/confirm" /> */}
                    {/* <PrivateRoute component={} path="/profile" /> */}
                </Routes>
            </BrowserRouter>
        
    )
}

export default routes
