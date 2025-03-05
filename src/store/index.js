import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './todoSlice.js'
import uiSlice from "./uiSlice.js";

const store = configureStore({
    reducer: {
        todo : todoSlice.reducer,
        ui : uiSlice.reducer
    }
})

export default store;