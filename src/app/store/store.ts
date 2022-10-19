import { configureStore } from "@reduxjs/toolkit"
import movimentsReducer from "../features/moviments/movimentsSlice"



export const store = configureStore({
  reducer: {
    moviments: movimentsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch
