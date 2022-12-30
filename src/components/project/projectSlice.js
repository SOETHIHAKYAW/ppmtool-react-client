import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        projectName:'React Store Project',
        projectIdentifier:'react1',
        description: 'This is react project',
        startDate:'2022-12-30',
        endDate:'2023-06-22',
    },
    {
        projectName:'React Shop Project',
        projectIdentifier:'react2',
        description: 'This is react project',
        startDate:'2022-12-30',
        endDate:'2023-06-22',
    }
]

export const projectSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{
        addProject:(state,action)=>{
            state.projects.push(action.payload);
        },
    }
});

export const selectAllProjects = (state)=>state.projects;

export const { addProject } = projectSlice.actions;

export default projectSlice.reducer;