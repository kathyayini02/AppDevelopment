import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import cartReducer from './cartSlice'; 

export default configureStore({
    reducer :{
        user:userSlice,
        cart:cartReducer,
        
        
    }
});

 