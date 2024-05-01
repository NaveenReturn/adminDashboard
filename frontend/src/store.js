import { combineReducers, configureStore } from "@reduxjs/toolkit";

import autherReducer from "./slices/UserSchema";
import searchReducer from "./slices/DeleteSlice";
import loginReducer from "./slices/LoginSlice"
const reducer = combineReducers({
     authState:autherReducer,
     searchState:searchReducer,
     loginState:loginReducer  
})

const store = configureStore({
    reducer,        
                   
})

export default store;