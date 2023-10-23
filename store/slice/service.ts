import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from 'react-redux'

interface IServiceType {
  lang: string
  theme: string
}

const useSelectorService: TypedUseSelectorHook<{ service: IServiceType }> =
  useSelector


const service = createSlice({
  name: 'service',
  initialState: { lang: 'ru', theme: 'light' },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload
    },
    changeTheme: (state, action) => {
      state.theme = action.payload
    }
  }
})

export const { changeLang, changeTheme } = service.actions
export { useSelectorService }
export default service.reducer