import axios from "axios";
import { registerFail, registerRequest, registerSuccess } from "../slices/UserSchema";
import { userdeleteFail, userdeleteRequest, userdeleteSuccess } from "../slices/DeleteSlice";
import { loginFail, loginRequest, loginSuccess } from "../slices/LoginSlice";
export const registerAction =(formData) =>async (dispatch)=>{
  
  try{
      dispatch(registerRequest())
      console.log(formData)   
   const {data} =  await axios.post(`/api/v1/newauther`,formData);
       if(data.success){
           window.location.href ="/dashboard"
       }
      dispatch(registerSuccess(data))
  }catch(error){
    dispatch(registerFail(error.response.data.message))
  }                            
}

// get all user
export const getallUserAction = async(dispatch)=>{
   
   try{
      dispatch(userdeleteRequest());
      const {data} = await axios.get(`/api/v1/getallusers`);
      dispatch(userdeleteSuccess(data))
   }catch(error){
      dispatch(userdeleteFail(error.response.data.message))
   }
}

// login api

export const loginAction =(email,password) =>async (dispatch)=>{
   try{
    dispatch(loginRequest())
     const {data} =  await axios.post(`/api/v1/login`,{email,password});
     dispatch(loginSuccess(data))
     if(data.user.role == "admin"){
          window.location.href="/dashboard"
     }else{
      window.location.href="/"
     }
   }catch(error){

    dispatch(loginFail(error.response.data.message))
   }                            
}