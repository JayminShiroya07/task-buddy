import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading : false,
    isError : false,
    error : undefined
}

const uiSlice = createSlice({
    name : 'ui',
    initialState : initialState,
    reducers : {
        changeLoading(state,action){
            console.log(action)
            state.loading = action.payload.isLoading
        },
        setError(state, action){
            state.isError = action.payload.isError,
            state.error = action.payload.error
        }
    }
})

export const uiAction = uiSlice.actions;

export default uiSlice;