import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = {cart:[]}

export const shopCartSlice = createSlice({
    name: 'shopList',
    initialState,
    reducers: {
        addItem: (state ,action) => {
            state.cart.push(action.payload);
        },
        removeitem: (state,action) => {
            state.cart = state.cart.filter((items)=> items.id !== action.payload )
        },
        
    },
})

// Action creators are generated for each case reducer function
export const {
    addItem,
    removeitem
} = shopCartSlice.actions

export default shopCartSlice.reducer