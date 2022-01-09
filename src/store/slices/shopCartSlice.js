import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = [
    
]

export const shopCartSlice = createSlice({
    name: 'shopList',
    initialState,
    reducers: {
        addItem: (state ,action) => {
            state.value.push(action.payload);
        },
        removeitem: (state,action) => {
            state.value = state.value.filter((items)=> items.id !== action.payload )
        },
        
    },
})

// Action creators are generated for each case reducer function
export const {
    addItem,
    removeitem
} = shopCartSlice.actions

export default shopCartSlice.reducer