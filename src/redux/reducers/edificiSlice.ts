import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export type Edificio = {
  rank:number,
  title:string,
  costo:number
}

export interface EdificioProduzione extends Edificio{
  piantagione:string
}

interface EdificiState {
  value: Edificio[]
}

// Define the initial state using that type
const initialState: EdificiState = {
  value:[]
}

export const edificiSlice = createSlice({
  name: 'edifici',
  initialState,
  reducers: {
    setEdifici:(state,action:PayloadAction<EdificiState>) =>{
      state.value = action.payload.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEdifici } = edificiSlice.actions

export default edificiSlice.reducer