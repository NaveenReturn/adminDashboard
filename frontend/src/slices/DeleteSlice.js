import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'search',
    initialState:{
        loading: false,
        isAuthenticated:false                          
    },
    reducers:{

        userdeleteRequest(state,action){
            return{
                ...state,                   
                loading:true,                     
            }                      
        },
        userdeleteSuccess(state,action){
            return{
                loading:false,
                isAuthenticated:true,
                userOnly:action.payload.userOnly 
                              
            }                      
        },
        userdeleteFail(state,action){
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
   userdeleteRequest,
   userdeleteSuccess,
   userdeleteFail
} = actions;

export default reducer;
