'use client';
import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

const initialState = {
    valueRotate: false,
    isDark: true,
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
        }
    }
})

export const {changeRotate, switchTheme} = commonSlice.actions;

export const commonState = (state:RootState) => state.commonSlice;

export default commonSlice.reducer;