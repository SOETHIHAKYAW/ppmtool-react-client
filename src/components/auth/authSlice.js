import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{},
    status:'',
    token:''
}

export const authSlice = createSlice({
    name:'authSlice',
    initialState,
    reducers:{

    }
})

export default authSlice.reducer