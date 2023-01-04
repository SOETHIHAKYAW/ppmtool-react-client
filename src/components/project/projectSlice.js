import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const GET_ALL_PROJECTS = 'http://localhost:8383/api/project/all';
const POST_NEW_PROJECT = 'http://localhost:8383/api/project/create';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async ()=>{
    const response = await axios.get(GET_ALL_PROJECTS);
    return response.data;
});

export const addNewProject = createAsyncThunk('projects/addNewProject', async (initialProject)=>{
    const response = await axios.post(POST_NEW_PROJECT,initialProject)
    return response.data
})

const initialState = {
    projects:[],
    status:'idle',
    error: null
}

export const projectSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{
        addProject:{
            reducer(state,action){
                state.push(action.payload);
            },
            prepare(projectName,projectIdentifier,description,startDate,endDate){
               return {
                payload:{
                    projectName,
                    projectIdentifier,
                    description,
                    startDate,
                    endDate
                }
            };

            
                   
            }, 
              
    }
    },
    extraReducers(builder){
        builder
            .addCase(fetchProjects.pending,(state,action)=>{
                state.status = 'loading';
            })
            .addCase(fetchProjects.fulfilled,(state,action)=>{
                state.status = 'succeeded';

                state.projects = state.projects.concat(action.payload);
            })
            .addCase(fetchProjects.rejected,(state,action)=>{
                state.status = 'failed';

                state.error = action.error.message;
            })
            .addCase(addNewProject.fulfilled,(state,action)=>{
                state.status = 'succeeded'
                state.projects.push(action.payload)
            })
            .addCase(addNewProject.rejected,(state,action)=>{
                state.status = 'failed'
                state.error = action.error.message
            })
    }
    
});

export const selectAllProjects = (state)=>state.projects.projects;
export const getProjectStatus =  (state)=>state.projects.status;
export const getProjectError =  (state)=>state.projects.error;

export const { addProject } = projectSlice.actions;

export default projectSlice.reducer;