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

const routes = () => {
    return (
        
            <BrowserRouter>
                <Routes>
                    <Route path="/user/login-register" element={<LoginPage/>} />
                    <Route path="/user/confirm/" element={<ConfirmPage/>} />
                    <Route path="/user/register/confirm" element={<NewUserPass/>} />
                    <Route path="/" element={<MainPage/>} />
                </Routes>
            </BrowserRouter>
        
    )
}

export default routes
