import { configureStore } from "@reduxjs/toolkit";
import projectReducer from '../components/project/projectSlice';

export const store = configureStore({
    reducer:{
        projects:projectReducer,
    }
})