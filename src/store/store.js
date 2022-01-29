import { configureStore } from '@reduxjs/toolkit';
import loginStatusSlice from './slices/loginStatusSlice';
import shopCartSlice from './slices/shopCartSlice';
import tokenSlice from './slices/tokenSlice';
import newUser from './slices/newUser.js';


const store = configureStore({
    reducer: {
        loginStatus: loginStatusSlice,
        shopList:shopCartSlice,
        userToken:tokenSlice,
        newUser:newUser,
    }
})
export default store
