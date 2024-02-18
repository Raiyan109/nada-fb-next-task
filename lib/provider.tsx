"use client"

import { makeStore } from "./store"
import { Provider } from "react-redux"

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={makeStore}>
        {children}
    </Provider>
}