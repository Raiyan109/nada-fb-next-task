import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    tasks: Array<string>
}


const initialState = {
    tasks: []
} as InitialState

export const tasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {

    }
});