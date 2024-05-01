import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'register',
    initialState:{
        loading: false,
        isAuthenticated:false                          
    },
    reducers:{

        registerRequest(state,action){
            return{
                ...state,                   
                loading:true,                     
            }                      
        },
        registerSuccess(state,action){
            return{
                loading:false,
                isAuthenticated:true,
                user:action.payload.user 
                              
            }                      
        },
        registerFail(state,action){
            return{
               ...state,
               loading:false,
               error: action.payload                  
            }                       
        }

    }                               
});

const {actions,reducer} = authSlice;

export const {
    registerRequest,
    registerSuccess,
    registerFail,
} = actions;

export default reducer;
