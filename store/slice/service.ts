import { createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from 'react-redux'

enum THEME {
    LIGHT = 'Light',
    DARK = 'Dark'
}

enum LANG {
  RU = 'Ru',
  ENG = 'Eng'
}

const BACKGROUND = {
  [THEME.LIGHT]: 'white',
  [THEME.DARK]: '#313131'
}

const initialState = { lang: LANG.RU, theme: THEME.LIGHT }
const useSelectorService: TypedUseSelectorHook<{
  service: typeof initialState
}> = useSelector

const service = createSlice({
  name: 'service',
  initialState,
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
export { useSelectorService, THEME, LANG, BACKGROUND }
export default service.reducer