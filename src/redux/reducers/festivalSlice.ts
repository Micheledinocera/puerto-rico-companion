import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EdificioProduzione } from './edificiSlice'
import { EDIFICI_PRODUZIONE } from 'utils/Utils'

export type Festival={
  piantagione: string,
  merci:string[],
  edificio:EdificioProduzione
}
export type FestivalState={
  value: Festival
}

// Define the initial state using that type
const initialState: FestivalState = {
  value:{
    piantagione:"",
    merci:[],
    edificio:EDIFICI_PRODUZIONE[0]
  }
}

export const festivalSlice = createSlice({
  name: 'festival',
  initialState,
  reducers: {
    setFestival:(state,action:PayloadAction<FestivalState>) =>{
      state.value = action.payload.value
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFestival } = festivalSlice.actions

export default festivalSlice.reducer