import {
    createSlice
} from '@reduxjs/toolkit'

const initialState ={ 
    isLog : false,
}


export const loginStatusSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state) => {
            state.isLog = true;
        },
        logOut: (state) => {
            state.isLog = false
        },
        
    },
})

// Action creators are generated for each case reducer function
export const {
    logIn,
    logOut
} = loginStatusSlice.actions

export default loginStatusSlice.reducer