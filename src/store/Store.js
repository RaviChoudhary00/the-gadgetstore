import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import variableReducer from './variableSlice'
import overviewReducer from './overviewSlice'


const store = configureStore({
    reducer:{
        cart:cartReducer,
        variable:variableReducer,
        overview:overviewReducer
    }
})

export default store;