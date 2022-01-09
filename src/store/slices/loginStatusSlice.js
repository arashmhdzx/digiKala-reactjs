import {
    createSlice
} from '@reduxjs/toolkit'

const initialState ={ 
    value : false,
}


export const loginStatusSlice = createSlice({
    name: 'loginStatus',
    initialState,
    reducers: {
        logIn: (state) => {
            state.value = true;
        },
        logOut: (state) => {
            state.value = false
        },
        
    },
})

// Action creators are generated for each case reducer function
export const {
    logIn,
    logOut
} = loginStatusSlice.actions

export default loginStatusSlice.reducer