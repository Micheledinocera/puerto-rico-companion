import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EntryProps } from 'components/ScoreEntry/ScoreEntry'

// Define a type for the slice state
interface ScoreState {
  punti: number,
  edifici: number,
  effetti: number,
  borghesi: number
}

export type ScoreProp = keyof ScoreState

// Define the initial state using that type
const initialState: ScoreState = {
  punti: 0,
  edifici: 0,
  effetti: 0,
  borghesi: 0
}

export const scoreSlice = createSlice({
  name: 'score',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setScore:(state,action:PayloadAction<EntryProps>) =>{
      state[action.payload.key] = action.payload.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { setScore } = scoreSlice.actions

export default scoreSlice.reducer