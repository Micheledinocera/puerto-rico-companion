import { configureStore } from '@reduxjs/toolkit'
import scoreSlice from './reducers/scoreSlice'
import edificiSlice from './reducers/edificiSlice'
import festivalSlice from './reducers/festivalSlice'

export const store = configureStore({
  reducer:{
    score: scoreSlice,
    edifici: edificiSlice,
    festival: festivalSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {counter: CounterState}
export type AppDispatch = typeof store.dispatch
