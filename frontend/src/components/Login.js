import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { loginAction } from '../actions/userAction';
const Login = () => {
   const [email,setEmail] = useState();
   const [password,setPassword] = useState();
   const dispatch =  useDispatch();
   const {error} = useSelector(state => state.loginState)

   const submitHandler = (e)=>{
    e.preventDefault();
  dispatch(loginAction(email,password))
}
   useEffect(()=>{
     if(error){
        alert(error)
     }
   },[error])

  return (
    <div className='login'>
        <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <label>Enter Email</label>   
            <input type='text' 
             placeholder='email...'
             className='my-2 form-control'
             required
             name='email'
             onChange={(e)=>setEmail(e.target.value)}
            />      
          <label>Enter Email</label>   
            <input type='text' 
             placeholder='password...'
             className='my-2 form-control'
             required
             name='email'
             onChange={(e)=>setPassword(e.target.value)}
            />      
            <button type='submit' className='btn btn-primary'>submit</button>                            
       </form>                           
    </div>
  )
}

export default Login