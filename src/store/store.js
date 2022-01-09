import { configureStore } from '@reduxjs/toolkit';
import loginStatusSlice from './slices/loginStatusSlice';
import shopCartSlice from './slices/shopCartSlice';

const store = configureStore({
    reducer: {
        loginStatus: loginStatusSlice,
        shopList:shopCartSlice
    },
})
export default store
