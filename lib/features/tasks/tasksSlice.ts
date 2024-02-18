import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    tasks: Array<{ title: string, desc: string }>,
}


const initialState: InitialState = {
    tasks: [],
};


export const tasks = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ title: string, desc: string }>) => {
            state.tasks.push(action.payload);
        }
    }
});

export const { addTask } = tasks.actions
export default tasks.reducer