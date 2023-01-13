import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const LOGIN_URL = 'http://localhost:8383/api/user/login'

export const login = createAsyncThunk('auth/login',async (loginRequest)=>{
    const response = await axios.post(LOGIN_URL,loginRequest)
    return response.data
})

const initialState = {
    user:{},
    success:false,
    token:''
}

export const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder
            .addCase(login.fulfilled,(state,action)=>{
                console.log(action.payload)
                const jwtResponse = action.payload
                state.success = jwtResponse.success
                state.token = jwtResponse.token
            })
    }
})

export const getToken = state => state.auths.token

export default authSlice.reducer