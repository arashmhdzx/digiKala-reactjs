import {
    createSlice
} from '@reduxjs/toolkit'

const initialState ={ 
    logged : false,
}


export const loginStatusSlice = createSlice({
    name: 'loginStatus',
    initialState,
    reducers: {
        logIn: (state) => {
            state.logged = true;
        },
        logOut: (state) => {
            state.logged = false
        },
        
    },
})

// Action creators are generated for each case reducer function
export const {
    logIn,
    logOut
} = loginStatusSlice.actions

export default loginStatusSlice.reducer