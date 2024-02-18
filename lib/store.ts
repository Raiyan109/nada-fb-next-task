import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './features/tasks/tasksSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        tasksSlice,
    },
});

// Infer the type of makeStore
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector