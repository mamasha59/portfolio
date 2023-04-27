'use client';
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

interface initialStateProps {
    valueRotate:boolean,
    isDark:boolean,
    langDefault:string,
}

const initialState:initialStateProps = {
    valueRotate: false,
    isDark: true,
    langDefault: 'rus'
}

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        changeRotate: (state, action) => {
            state.valueRotate = action.payload
        },
        switchTheme: (state) => {
            state.isDark = !state.isDark
        },
        switchLang: (state, action) => {
            state.langDefault = action.payload
        }
    }
})

export const {changeRotate, switchTheme, switchLang} = commonSlice.actions;

export const commonState = (state:RootState) => state.commonSlice;

export default commonSlice.reducer;