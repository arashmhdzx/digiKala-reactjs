import React, { useEffect } from 'react'
import {
    BrowserRouter,
    Routes,
    Route
    } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { logIn } from './store/slices/loginStatusSlice.js';

import MainPage from './components/app.jsx'
import LoginPage from './pages/LoginPage/Login'
import ConfirmPage from './pages/LoginPage/Confirm.jsx'
import NewUserPass from './pages/LoginPage/newUserPass';
import PrivateRoute from './routes/PrivateRoute.jsx';
import PublicRoute from './routes/PublicRoute.jsx';
import Profile from './pages/profile/profile.jsx';
import Products from './pages/products/products.jsx';
import DataEditor from './data/dataEditor.js';
import SearchPage from './pages/searchPage/searchPage.jsx';

const AppRoutes = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("token");
        const isCart = localStorage.getItem("cart")
        if(isCart && loggedInUser){
            localStorage.setItem("cart",JSON.stringify([]))
        }
        if (loggedInUser) {
        //   const foundUser = JSON.parse(loggedInUser);
            dispatch(logIn());
        }
    }, []);

    return (
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<PublicRoute restricted={false}>
                        <MainPage />
                    </PublicRoute> } />
                    <Route path="/DataEditor" exact element={<PublicRoute restricted={false}>
                        <DataEditor />
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
                    <Route path="/products/dkp-:productId" element={<PublicRoute restricted={false}>
                        <Products />
                    </PublicRoute> } />
                    <Route path="/products/q=:userSearch" element={<PublicRoute restricted={false}>
                        <SearchPage />
                    </PublicRoute> } />
                    
                    {/* <PublicRoute restricted={false} component={ <MainPage/>} path="/" exact />
                    <PublicRoute restricted={true} component={<LoginPage />} path="" />
                    <PublicRoute restricted={true} component={<ConfirmPage />} path="/user/confirm" />
                    <PublicRoute restricted={true} component={<NewUserPass />} path="/user/register/confirm" /> */}
                    {/* <PrivateRoute component={} path="/profile" /> */}
                </Routes>
            </BrowserRouter>
        
    )
}

export default AppRoutes
