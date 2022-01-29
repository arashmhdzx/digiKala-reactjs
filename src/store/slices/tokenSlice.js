import {
    createSlice
} from '@reduxjs/toolkit'

const initialState ={ 
    userID:"",
    passWord:""
}


export const tokenSlice = createSlice({
    name: 'userToken',
    initialState,
    reducers: {
        userIDTokenHandler: (state,action) => {
            state.userID = action.payload;
        },
        passwordTokenHandler: (state,action) => {
            state.passWord = action.payload;
        }
        
    }
})

// Action creators are generated for each case reducer function
export const {
    userIDTokenHandler,
    passwordTokenHandler
} = tokenSlice.actions

export default tokenSlice.reducer