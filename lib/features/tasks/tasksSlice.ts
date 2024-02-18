import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    tasks: Array<string>,
    title: string,
    desc: string,
}


const initialState = {
    tasks: [],
    title: '',
    desc: '',
} as InitialState

export const tasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            state.tasks.push(action.payload);
        }
    }
});

export const { addTask } = tasks.actions
export default tasks.reducer