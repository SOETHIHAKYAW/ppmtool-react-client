import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_TASKS = 'http://localhost:8383/api/task/all/'

export const fetchProjectTasks = createAsyncThunk('projectTasks/fetchProjectTasks',async (data)=>{
    const response = await axios.get(`${GET_ALL_TASKS}${data.projectId}`,{
        headers:{
            'Authorization':data.token
        }
    })
    return response.data
})

const initialState = {
    projectTasks:[],
    status:'idle',
    error:null
}

export const projectTaskSlice = createSlice({
    name:'projectTaskSlice',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
            .addCase(fetchProjectTasks.pending,(state,action)=>{
                state.status = 'loading'
            })
            .addCase(fetchProjectTasks.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.projectTasks = action.payload
            })
            .addCase(fetchProjectTasks.rejected,(state,action)=>{
                state.status = 'failed'
                console.error(action.error.message)
            })
    }
})

export const selectTaskWithTodo = state => {
   const projectTasks = state.projectTasks.projectTasks

   return projectTasks.filter(pt => pt.status === 'TODO')
}

export const selectTaskWithProgress = state => {
    const projectTasks = state.projectTasks.projectTasks
 
    return projectTasks.filter(pt => pt.status === 'IN_PROGRESS')
 }

 export const selectTaskWithDone = state => {
    const projectTasks = state.projectTasks.projectTasks
 
    return projectTasks.filter(pt => pt.status === 'DONE')
 }

 export const getStatus = state => state.projectTasks.status
 export const getError = state => state.projectTasks.error

export default projectTaskSlice.reducer