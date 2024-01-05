import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface codeState {
  value: string
}

// Define the initial state using that type
const initialState: codeState = {
  value:""
}

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    setCode:(state,action:PayloadAction<codeState>) =>{
      state.value = action.payload.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCode } = codeSlice.actions

export default codeSlice.reducer