import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = {
    id: "",
    fName: "",
    lName: "",
    email: "",
    password: "",
    cart: [],
    wishlist: [],
    address: [],
    recentWatched: []
}


export const newUser = createSlice({
    name: 'newUser',
    initialState,
    reducers: {
        idHandler: (state, action) => {
            state.id = action.payload;
        },
        passwordHandler: (state, action) => {
            state.password = action.payload;
        },
        fNameHandler: (state, action) => {
            state.fName = action.payload;
        },
        lNameHandler: (state, action) => {
            state.lName = action.payload;
        },
        cartHandler: (state, action) => {
            state.cart.push(action.payload);
        },
        wishlistHandler: (state, action) => {
            state.wishlist.push(action.payload);
        },
        addressHandler: (state, action) => {
            state.address.push(action.payload);
        },
        recentWatchedHandler: (state,action) =>{
            state.recentWatched.push(action.payload);
        }

    }
})

// Action creators are generated for each case reducer function
export const {
    idHandler,
    fNameHandler,
    lNameHandler,
    passwordHandler,
    cartHandler,
    wishlistHandler,
    addressHandler,
    recentWatchedHandler
} = newUser.actions

export default newUser.reducer